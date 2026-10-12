# MongoDB Schema Reference

Auth: routes are protected via `Authorization: Bearer <token>` header (JWT in localStorage on the frontend). `userId` in every user-owned query below comes from the decoded token, never from the request body.

## Collections overview

|Collection|Type|Linked via|
|---|---|---|
|User|has embedded `profile`|–|
|Skill|referenced|`userId`|
|DSATopic|referenced|`userId`|
|Project|referenced|`userId`|
|Certification|referenced|`userId`|
|PlacementDrive|referenced|`userId`|
|JobPosting|shared / seeded|none (not user-owned)|

Rule used: embed if always fetched together with parent and never modified independently (Profile). Reference if it has its own independent add/delete actions (everything else). JobPosting is global reference data, so it has no `userId`.

---

## User

```js
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true }, // unique: true auto-creates an index + blocks duplicates
  password: { type: String, required: true }, // stores the bcrypt hash, field name is still "password"
  profile: {
    college: String,
    rollNumber: String,
    course: { type: String, enum: ['BCA','B.Tech','MCA','M.Tech'] },
    semester: Number,
    cgpa: Number,
    backlogs: Number,
    graduationYear: Number
  }
}, { timestamps: true });
```

**Never return `password` to frontend.** Exclude it explicitly on every query that sends user data back:

```js
const user = await User.findById(userId).select('-password');
```

For login only, you need the opposite — fetch just enough to verify:

```js
const user = await User.findOne({ email }); // password included so bcrypt.compare can run
```

---

## Skill

```js
const skillSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true   // speeds up "find all skills for this user" queries
  },
  name: { type: String, required: true },
  category: { type: String, enum: ['Frontend','Backend','Programming','Database','Core CS','Tools','Soft Skills'] },
  level: { type: String, enum: ['Beginner','Intermediate','Advanced'] }
});
```

Optional (only if you want to block duplicate skill names per user):

```js
skillSchema.index({ userId: 1, name: 1 }, { unique: true });
```

Update (`PUT /api/skills/:id`) replaces `name`, `category`, and `level` wholesale — send all three fields even if only one changed.

Skill names are stored as the user typed them. Normalization (lowercase, trim, alias map such as `reactjs` → `react`) happens at comparison time via `utils/normalizeSkill.js`, not at storage time.

---

## DSATopic

```js
const dsaTopicSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  name: { type: String, required: true },
  easy: { type: Number, default: 0 },
  medium: { type: Number, default: 0 },
  hard: { type: Number, default: 0 }
});
```

Update (`PUT /api/dsa/:id`) uses `$inc`, so the values sent in the body are **added** to the existing counts, not used to replace them.

---

## Project

```js
const projectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  name: { type: String, required: true },
  description: String,
  technologies: [String],
  github: String
});
```

---

## Certification

```js
const certificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  name: { type: String, required: true },
  issuer: String,
  year: Number,
  credential: String
});
```

---

## PlacementDrive

```js
const placementDriveSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  company: { type: String, required: true },
  role: String,
  package: String, // always a string, e.g. "6 LPA" — not a number
  status: { type: String, enum: ['Not Applied','Applied','Shortlisted','Placed','Rejected'], default: 'Not Applied' },
  eligible: Boolean
});
```

---

## JobPosting

Shared, read-only reference data. **No `userId`** — every user reads the same collection. Populated only by the seed script (`npm run seed:jobs` → `scripts/seedJobs.js`, source data in `data/jobs.json`). The script wipes and re-inserts, so it is safe to re-run.

```js
const jobPostingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  package: String, // string, e.g. "8 LPA" (same convention as PlacementDrive)
  requiredSkills: [String], // stored normalized: lowercase, trimmed, canonical names
  categoryWeights: {
    dsa: { type: Number, required: true },
    mern: { type: Number, required: true },
    fundamentals: { type: Number, required: true },
    communication: { type: Number, required: true }
  }
}, { timestamps: true });
```

Rules for seed data:

- The four `categoryWeights` must sum to 100 (the seed script rejects rows that don't).
- `requiredSkills` use one canonical lowercase name per skill (`react`, `node`, `rest api`). Don't include `dsa` — DSA is covered by `categoryWeights.dsa` and computed from DSA tracker counts, not skills.
- Weights are manually defined from domain knowledge, not learned.

---

## Derived values (not stored)

These are computed on request from the collections above, never saved:

|Value|Source|Where computed|
|---|---|---|
|Category progress (dsa, mern, fundamentals, communication %)|Skill + DSATopic|`utils/categoryProgress.js`|
|Job match % / gaps|JobPosting + Skill + category progress|`utils/calculateMatch.js`|
|Readiness score|User.profile + category progress + Project/Certification counts|`utils/calculateReadiness.js`|

---

## Indexing — quick rules

- `index: true` on any `userId` field → every "get all X for this user" query becomes fast instead of scanning the whole collection.
- `unique: true` on `email` (and `username`) → auto-creates an index AND rejects duplicates in one line, no manual pre-check needed.
- Compound index (`{ userId: 1, name: 1 }`, `unique: true`) → only needed if you want to prevent the _same user_ from having two records with the same name (e.g. duplicate skill). Not required for correctness, optional.
- Indexes are declared in the model file itself — no separate database command needed. Mongoose creates them automatically the first time the model is used.
- JobPosting needs no extra index at ~15–20 documents.

---

## Security rule that applies to every user-owned collection

Every update/delete query must filter by **both** `_id` and `userId`:

```js
Skill.deleteOne({ _id: req.params.id, userId: req.userId });
```

This stops User A from deleting/editing User B's data by guessing an `_id`. (JobPosting is exempt: it is global and has no write routes.)