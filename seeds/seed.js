const seedPosts = require('./post-seed');
const seedUsers = require('./user-seed');
const seedComments = require('./comment-seed');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();