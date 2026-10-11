// points available per component (sum = 100)
const MAX = {
  cgpa: 20,
  dsa: 25,
  mern: 20,
  fundamentals: 10,
  communication: 5,
  projects: 15,
  certs: 5
};
const PROJECT_CAP = 3;
const CERT_CAP = 2;
const BACKLOG_PENALTY = 5;      // points per backlog
const MAX_BACKLOG_PENALTY = 20;

const calculateReadiness = ({ profile = {}, categoryProgress, projectCount, certCount }) => {
  const cgpa = Number(profile.cgpa) || 0;
  const backlogs = Number(profile.backlogs) || 0;

  const breakdown = {
    cgpa: Math.min(cgpa, 10) / 10 * MAX.cgpa,
    dsa: categoryProgress.dsa / 100 * MAX.dsa,
    mern: categoryProgress.mern / 100 * MAX.mern,
    fundamentals: categoryProgress.fundamentals / 100 * MAX.fundamentals,
    communication: categoryProgress.communication / 100 * MAX.communication,
    projects: Math.min(projectCount, PROJECT_CAP) / PROJECT_CAP * MAX.projects,
    certs: Math.min(certCount, CERT_CAP) / CERT_CAP * MAX.certs,
    backlogPenalty: -Math.min(backlogs * BACKLOG_PENALTY, MAX_BACKLOG_PENALTY)
  };

  // round each part for display
  Object.keys(breakdown).forEach((k) => {
    breakdown[k] = Math.round(breakdown[k]);
  });

  const total = Object.values(breakdown).reduce((a, b) => a + b, 0);
  const score = Math.max(0, Math.min(100, total));
  const label = score >= 70 ? 'Strong' : score >= 40 ? 'Moderate' : 'Needs Work';

  return { score, label, breakdown };
};

module.exports = { calculateReadiness };