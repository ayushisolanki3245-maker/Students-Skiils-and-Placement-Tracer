const aliases = {
  reactjs: 'react',
  'react.js': 'react',
  nodejs: 'node',
  'node.js': 'node',
  expressjs: 'express',
  'express.js': 'express',
  mongo: 'mongodb',
  js: 'javascript',
  restapi: 'rest api',
  'rest apis': 'rest api',
  tailwindcss: 'tailwind',
  'data structures': 'dsa',
  'data structures and algorithms': 'dsa',
  springboot: 'spring boot',
  mysql: 'sql',
  'c plus plus': 'c++',
  'operating system': 'os',
  'operating systems': 'os',
  database: 'dbms'
};

const normalizeSkill = (name) => {
  const clean = String(name).toLowerCase().trim();
  return aliases[clean] || clean;
};

module.exports = { normalizeSkill };


