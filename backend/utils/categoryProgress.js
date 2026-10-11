const { normalizeSkill } = require('./normalizeSkill');

const LEVEL_WEIGHT = { Beginner: 0.33, Intermediate: 0.66, Advanced: 1 };
const DSA_TARGET = 300;            // weighted points for 100%
const MERN_TARGET_SKILLS = 8;      // skills needed for 100%
const FUNDAMENTALS_TARGET = 5;
const COMMUNICATION_TARGET = 3;

// level-weighted skill points for given categories, as a % of a target count
const skillPercent = (skills, categories, target) => {
  const points = skills
    .filter((s) => categories.includes(s.category))
    .reduce((sum, s) => sum + (LEVEL_WEIGHT[s.level] || 0), 0);
  return Math.min(100, Math.round((points / target) * 100));
};

const calculateCategoryProgress = (skills, dsaTopics) => {
  const dsaPoints = dsaTopics.reduce(
    (sum, t) => sum + t.easy * 1 + t.medium * 2 + t.hard * 3, 0
  );

  return {
    dsa: Math.min(100, Math.round((dsaPoints / DSA_TARGET) * 100)),
    mern: skillPercent(skills, ['Frontend', 'Backend', 'Database'], MERN_TARGET_SKILLS),
    fundamentals: skillPercent(skills, ['Core CS'], FUNDAMENTALS_TARGET),
    communication: skillPercent(skills, ['Soft Skills'], COMMUNICATION_TARGET)
  };
};

module.exports = { calculateCategoryProgress };