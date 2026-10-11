const { normalizeSkill } = require('../utils/normalizeSkill');
const { calculateCategoryProgress } = require('../utils/categoryProgress');

console.log(normalizeSkill('  ReactJS '));   // react
console.log(normalizeSkill('Node.js'));      // node

const skills = [
  { name: 'React', category: 'Frontend', level: 'Advanced' },
  { name: 'MongoDB', category: 'Database', level: 'Intermediate' },
  { name: 'OS', category: 'Core CS', level: 'Beginner' }
];
const dsa = [{ name: 'Arrays', easy: 10, medium: 5, hard: 1 }];

console.log(calculateCategoryProgress(skills, dsa));