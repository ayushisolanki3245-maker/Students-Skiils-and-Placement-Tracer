# API Endpoints

All protected routes require an `Authorization: Bearer <token>` header. The frontend stores the JWT in localStorage after signup/login and attaches it to every request. `userId` is always taken from the decoded token — never from request body.

Every route below except `/api/auth/*` is protected.

---

## Auth

|Method|Path|Body|Response|
|---|---|---|---|
|POST|/api/auth/signup|`{ username, email, password }`|`{ message, token }`|
|POST|/api/auth/login|`{ email, password }`|`{ message, token }`|
|POST|/api/auth/logout|–|frontend-only — clears token from localStorage, no backend call|

`username` and `email` must both be unique — signup rejects the request if either is already taken.

---

## Profile

(embedded in User document)

|Method|Path|Body|Response|
|---|---|---|---|
|GET|/api/profile|–|`{ username, email, profile: {...} }`|
|PUT|/api/profile|`{ college, rollNumber, course, semester, cgpa, backlogs, graduationYear }`|updated profile|

`course` enum: `BCA, B.Tech, MCA, M.Tech`

---

## Skills

|Method|Path|Body|Response|
|---|---|---|---|
|GET|/api/skills|–|`[{ _id, name, category, level }]`|
|POST|/api/skills|`{ name, category, level }`|created skill|
|PUT|/api/skills/:id|`{ name, category, level }`|updated skill (full replace — send all three fields)|
|DELETE|/api/skills/:id|–|`{ success: true }`|

Category: `Frontend, Backend, Programming, Database, Core CS, Tools, Soft Skills` Level: `Beginner, Intermediate, Advanced`

Skill names are normalized (lowercase, trimmed, aliases like `ReactJS` → `react`) when compared against job requirements, so users can type them naturally.

---

## DSA Tracker

|Method|Path|Body|Response|
|---|---|---|---|
|GET|/api/dsa|–|`[{ _id, name, easy, medium, hard }]`|
|POST|/api/dsa|`{ name, easy, medium, hard }`|created topic|
|PUT|/api/dsa/:id|`{ easy, medium, hard }`|updated topic — adds given values to existing counts (not a replace)|
|DELETE|/api/dsa/:id|–|`{ success: true }`|

---

## Projects

|Method|Path|Body|Response|
|---|---|---|---|
|GET|/api/projects|–|`[{ _id, name, description, technologies, github }]`|
|POST|/api/projects|`{ name, description, technologies, github }`|created project|
|DELETE|/api/projects/:id|–|`{ success: true }`|

---

## Certifications

|Method|Path|Body|Response|
|---|---|---|---|
|GET|/api/certifications|–|`[{ _id, name, issuer, year, credential }]`|
|POST|/api/certifications|`{ name, issuer, year, credential }`|created cert|
|DELETE|/api/certifications/:id|–|`{ success: true }`|

---

## Placement Drives

|Method|Path|Body|Response|
|---|---|---|---|
|GET|/api/placements|–|`[{ _id, company, role, package, status, eligible }]`|
|POST|/api/placements|`{ company, role, package, eligible }`|created drive (status defaults to "Not Applied")|
|PUT|/api/placements/:id|`{ status }`|updated drive|
|DELETE|/api/placements/:id|–|`{ success: true }`|

Status values: `Not Applied, Applied, Shortlisted, Placed, Rejected` `package` is stored as a string (e.g. `"6 LPA"`) — always send it as a string, not a number.

---

## Jobs

Job postings are shared, seeded data (`npm run seed:jobs`). There is no create/update/delete API — read-only.

|Method|Path|Body|Response|
|---|---|---|---|
|GET|/api/jobs|–|`[{ _id, title, company, package, requiredSkills, categoryWeights }]`|
|GET|/api/jobs/:id/match|–|match result (below)|

`categoryWeights` = `{ dsa, mern, fundamentals, communication }`, always summing to 100. `requiredSkills` are lowercase canonical names (e.g. `react`, `node`, `rest api`).

**Match response:**

```json
{
  "jobId": "...",
  "title": "Software Developer",
  "company": "TechCorp",
  "matchPercent": 62,
  "matchedSkills": ["react", "mongodb"],
  "missingSkills": ["express", "node"],
  "categoryGaps": [
    { "category": "mern", "weight": 35, "userPercent": 30, "gapScore": 24.5 },
    { "category": "dsa", "weight": 40, "userPercent": 50, "gapScore": 20 }
  ],
  "topPriority": "mern"
}
```

- `matchPercent` = matched required skills / total required skills × 100. It is `null` when a job has zero required skills (never a false 100%) and `0` when the user has no skills.
- `gapScore` = `weight × (100 − userPercent) / 100`. `categoryGaps` is sorted by biggest gap first, and `topPriority` is the first entry's category.
- Matching is computed in Node (`utils/calculateMatch.js`) — no ML involved.
- Invalid `:id` format currently returns 500; unknown valid id returns 404.

---

## Readiness

|Method|Path|Body|Response|
|---|---|---|---|
|GET|/api/readiness|–|`{ score, label, breakdown, categoryProgress }`|

```json
{
  "score": 58,
  "label": "Moderate",
  "breakdown": {
    "cgpa": 16, "dsa": 2, "mern": 4, "fundamentals": 1,
    "communication": 0, "projects": 10, "certs": 3, "backlogPenalty": 0
  },
  "categoryProgress": { "dsa": 8, "mern": 21, "fundamentals": 7, "communication": 0 }
}
```

- `score` is 0–100. `label`: `Strong` (70+), `Moderate` (40–69), `Needs Work` (<40).
- `breakdown` values are points contributed by each component (`backlogPenalty` is negative). Max points: cgpa 20, dsa 25, mern 20, fundamentals 10, communication 5, projects 15 (capped at 3), certs 5 (capped at 2). Penalty: 5 per backlog, max 20.
- `categoryProgress` (0–100 each) is included so the dashboard's progress bars need no second call.
- The formula is a **placeholder**. It will later be replaced by the Flask ML model (`/predict-readiness`). **The response shape will not change.**
- A user with no data returns `score: 0`, `label: "Needs Work"`.

---

## Not yet defined (Phase 3 — depends on Flask/Ollama)

- Flask `/predict-readiness` (swaps in behind `GET /api/readiness`)
- AI-generated recommendations (Ollama)

Don't build frontend screens against these yet — contract will follow once the services exist.