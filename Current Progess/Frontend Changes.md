# Frontend Changes

This file records the frontend and API integration work completed so far.

## API connection

- Added `frontend/src/api.js` with a shared request helper for JSON requests, API errors, and authenticated requests.
- Protected API calls read the JWT from `localStorage` and send it as `Authorization: Bearer <token>`.
- Signup and login save the returned JWT under the `token` key.
- Added a Vite development proxy for `/api` to `http://localhost:5000`. Set `VITE_API_BASE_URL` when the frontend needs to call a different API origin.
- Dashboard routes redirect to `/login` when no token is present. Logout clears the token locally; the backend has no logout endpoint.

## Connected backend endpoints

- **Auth:** Signup sends `{ username, email, password }`; login sends `{ email, password }`. The signup form's “Full Name” is sent as `username` because that is the backend field.
- **Profile:** Loads `GET /api/profile` and saves academic fields with `PUT /api/profile`. Username and email are displayed as read-only because the profile update API does not support changing them. The phone field was removed because it is not part of the backend profile schema.
- **Skills:** Loads, creates, updates, and deletes skills through `/api/skills`.
- **DSA tracker:** Loads and deletes topics through `/api/dsa`; adding problems creates a topic or increments its existing counts through the backend's additive `PUT` behavior.
- **Projects:** Loads, creates, and deletes projects through `/api/projects`. The UI's comma-separated technologies are sent as an array.
- **Certifications:** Loads, creates, and deletes certifications through `/api/certifications`. The year is sent as a number.
- **Placement tracker:** Loads, creates, updates status, and deletes drives through `/api/placements`.
- **Jobs:** Loads `/api/jobs` and requests `/api/jobs/:id/match` for a selected posting.
- **Readiness:** Loads `/api/readiness` for the score, score breakdown, category progress, and dashboard values.

## Decisions and constraints

- The placement API documentation says `package` is a formatted string such as `6 LPA`, but the backend `Placement` model defines it as a number. After confirming the preferred behavior, the frontend uses a numeric LPA field and sends a number to match the current backend model. The API documentation still needs to be reconciled with the model.
- The existing AI Insights page was changed to a Job Matches page because no AI recommendations endpoint is implemented yet. It displays backend match results and states that AI-generated recommendations are unavailable.
- The local Vite proxy avoids browser CORS issues during local development. A deployed frontend will need an appropriate `VITE_API_BASE_URL` and backend CORS configuration for its origin.
- All API screens now show request errors rather than silently treating mock data as saved data.

## Review and testing status

- No build or automated tests were run as part of this work. The app and API flows still need to be started and tested, including signup/login, profile save/reload, each tracker operation, job matching, readiness, and logout.
- The backend must be running on port `5000` for the default local proxy configuration.
