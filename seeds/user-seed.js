const { User } = require('../models')

const UserData = [
  {
    "name": "Dylan",
    "email": "Dylan@test.com",
    "password": "" 
  },
  {
    "name": "Gillian",
    "email": "Gillian@test2.com",
    "password": ""
  },
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;