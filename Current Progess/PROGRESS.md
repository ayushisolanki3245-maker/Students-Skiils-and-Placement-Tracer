# Placement Preparation Platform — Progress

---

## Phase 1 — Auth & Setup ✅

- Repo initialized, MongoDB connection established
- `User` model created with embedded `profile` (college, rollNumber, course, semester, cgpa, backlogs, graduationYear)
- Password field excluded from all responses (`.select('-password')`); fetched only for login verification
- Endpoints built:
    - `POST /api/auth/signup`
    - `POST /api/auth/login`
- Logout is frontend-only (clears token from localStorage) — no backend route
- `protect` middleware built — verifies JWT (from `Authorization: Bearer <token>` header, token stored in localStorage on frontend), sets `req.userId` for use in all downstream controllers
- Design decision: embed vs. reference — embed `Profile` (always fetched with User, never modified independently); reference Skills/DSA/Projects/Certifications/PlacementDrives (each has its own independent add/delete lifecycle)
- Tested and working on localhost only (no hosting yet)
- **Target met:** student can sign up, log in, and session persists via token in localStorage

> **Future consideration:** may migrate to httpOnly cookie-based JWT storage later (more resistant to XSS than localStorage). Not implemented yet — current auth flow is Bearer token + localStorage.

---

## Phase 2 — Core Data Modules ✅

Pattern used for every module: `Model → Controller → Routes → mount in server.js`, all routes behind `protect`, all queries scoped by `req.userId`.

### Skills ✅

- Model: `userId`, `name`, `category` (enum), `level` (enum)
- `GET /api/skills`, `POST /api/skills`, `PUT /api/skills/:id`, `DELETE /api/skills/:id`

### DSA Tracker ✅

- Model: `userId`, `name`, `easy`, `medium`, `hard` (Number, default 0)
- `GET /api/dsa`, `POST /api/dsa`, `PUT /api/dsa/:id`, `DELETE /api/dsa/:id`
- `PUT` uses `$inc` (atomic increment) + `{ new: true }`, not overwrite

### Projects ✅

- Model: `userId`, `name`, `description`, `technologies` ([String]), `github`
- `GET /api/projects`, `POST /api/projects`, `DELETE /api/projects/:id`

### Certifications ✅

- Model: `userId`, `name`, `issuer`, `year`, `credential`
- `GET /api/certifications`, `POST /api/certifications`, `DELETE /api/certifications/:id`

### Placement Drives ✅

- Model: `userId`, `company`, `role`, `package`, `status` (enum), `eligible`
- `GET /api/placements`, `POST /api/placements`, `PUT /api/placements/:id`, `DELETE /api/placements/:id`
- Status values: `Not Applied`, `Applied`, `Shortlisted`, `Placed`, `Rejected`

### Job Postings Seed ✅

- Model: `JobPosting` — `title`, `company`, `package` (String), `requiredSkills` ([String], stored normalized), `categoryWeights` (`dsa`, `mern`, `fundamentals`, `communication`, must sum to 100)
- No `userId` — shared data, read-only for users, not a user-facing CRUD module
- 15 postings in `data/jobs.json`, loaded by `scripts/seedJobs.js` (`npm run seed:jobs`)
- Seed script checks that weights sum to 100, then `deleteMany` + `insertMany`, so it is safe to re-run
- `dsa` kept out of `requiredSkills` — it is covered by `categoryWeights.dsa` and the DSA tracker counts
- DB connection env variable is `MONGODB_URI`

---

## Phase 3 — Matching & Readiness (formula-based, no ML yet) 🔄 (in progress)

Same pattern as Phase 2: `Model → Controller → Routes → mount in server.js`, all routes behind `protect`, all queries scoped by `req.userId`. Core logic lives in `utils/` as pure functions (no DB, no `req`/`res`); controllers only fetch data, call them, and respond.

Goal of this phase for now: get every endpoint working end-to-end between frontend and backend using simple formulas, with response shapes that won't change when the engine behind them is swapped later.

### Helpers (`utils/`) ✅

- `normalizeSkill.js` — lowercase + trim + alias map (`reactjs` → `react`, `node.js` → `node`); fixes the "ReactJS vs React" mismatch edge case, alias list grows as mismatches show up
- `categoryProgress.js` — `calculateCategoryProgress(skills, dsaTopics)` returns `dsa`, `mern`, `fundamentals`, `communication` as 0–100
    - DSA % from weighted solved counts (easy×1, medium×2, hard×3) against a target
    - Other categories from level-weighted skill points (Beginner 0.33, Intermediate 0.66, Advanced 1) against a target count
    - Targets are constants at the top of the file
- `calculateMatch.js` — `calculateMatch(job, userSkills, categoryProgress)` returns `matchPercent`, `matchedSkills`, `missingSkills`, `categoryGaps`, `topPriority`
- `calculateReadiness.js` — `calculateReadiness({ profile, categoryProgress, projectCount, certCount })` returns `score`, `label`, `breakdown`
- Tested helpers with hardcoded inputs before wiring routes (normalizer + category progress output matched expected values)

### Job Matching 🔄 (built, Postman check pending)

- Controller: `jobController.js`, routes: `jobRoutes.js`, mounted at `/api/jobs`
- `GET /api/jobs` — list all postings
- `GET /api/jobs/:id/match` — match % + matched/missing skills + category gaps + top priority
- `matchPercent` = matched required skills / total required skills; `null` if the job has zero required skills (never a false 100%), `0` if the user has no skills
- `gapScore` = weight × (100 − user %) / 100, sorted biggest gap first (same logic as the walkthrough example in Project Summary)

### Readiness Score 🔄 (built, Postman check pending)

- Controller: `readinessController.js`, routes: `readinessRoutes.js`, mounted at `/api/readiness`
- `GET /api/readiness` — `{ score, label, breakdown, categoryProgress }`
- `categoryProgress` included in the response so the dashboard bars need no second call
- Placeholder formula: CGPA, DSA, MERN, fundamentals, communication, projects (capped), certifications (capped), minus a penalty per backlog
- Missing profile fields count as 0 instead of crashing
- `label`: `Strong` (70+), `Moderate` (40–69), `Needs Work` (<40)
- Response shape is fixed; only the body of `calculateReadiness` changes if the engine is swapped (ML / LLM) later

---

## Cross-cutting decisions carried through Phase 2 & 3

- `userId` always taken from `req.userId` (JWT), never from request body
- Every update/delete filters by `{ _id, userId }` together — this is the access-control mechanism, not a separate permissions layer
- Controllers export via one `module.exports = {}` at file bottom, not per-function `exports.fn`
- Route files stay unprefixed (`'/'`, `'/:id'`); collection name lives only in the `app.use('/api/x', ...)` mount line in `server.js`
- No update route on Projects/Certifications by design (edit = delete + recreate). Skills has a full-replace `PUT /api/skills/:id` (all three fields required even if only one changed); DSA is the one module needing partial numeric update (`$inc`)
- Job matching lives in Node (`calculateMatch.js`), not Flask — plain skill-overlap logic, no ML needed, keeps working independent of any other service
- Skill names are normalized at comparison time, not at storage time, so users can type them naturally
- Readiness engine (formula vs. ML vs. LLM) is undecided — revisit once the frontend works end-to-end

---

## Next up

1. Postman-verify jobs + readiness endpoints (empty user, populated user, `ReactJS` → `react` alias, backlog penalty), then mark both ✅
2. Delete the temporary `scripts/testHelpers.js`
3. Frontend: Axios instance with token interceptor + auth pages → data forms → dashboard (readiness + category bars) → job explorer / compare page
4. Decide the readiness engine: ML (Flask), LLM, or stay formula-based