const { normalizeSkill } = require('./normalizeSkill');

const CATEGORY_KEYS = ['dsa', 'mern', 'fundamentals', 'communication'];

const calculateMatch = (job, userSkills, categoryProgress) => {
  // normalize both sides so "ReactJS" matches "react"
  const userSet = new Set(userSkills.map((s) => normalizeSkill(s.name)));
  const required = (job.requiredSkills || []).map(normalizeSkill);

  const matchedSkills = required.filter((s) => userSet.has(s));
  const missingSkills = required.filter((s) => !userSet.has(s));

  // zero required skills -> null, never a false 100%
  const matchPercent = required.length === 0
    ? null
    : Math.round((matchedSkills.length / required.length) * 100);

  // weight x (100 - user%), sorted biggest gap first
  const categoryGaps = CATEGORY_KEYS.map((key) => ({
    category: key,
    weight: job.categoryWeights[key],
    userPercent: categoryProgress[key],
    gapScore: Math.round(job.categoryWeights[key] * (100 - categoryProgress[key])) / 100
  })).sort((a, b) => b.gapScore - a.gapScore);

  return {
    matchPercent,
    matchedSkills,
    missingSkills,
    categoryGaps,
    topPriority: categoryGaps[0].category
  };
};

module.exports = { calculateMatch };