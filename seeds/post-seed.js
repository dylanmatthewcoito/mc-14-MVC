const { Post } = require('../models')

const PostData = [
  {
    "name": "David",
    "description": "Find me on LinkedIn",
    "date_created": new Date ('2024-3-20'),
    "user_id": 1,
  },
  {
    "name": "Frank",
    "description": "Find me on GitHub",
    "date_created": new Date ('2024-3-20'),
    "user_id": 1,
  },
  {
    "name": "Isaac",
    "description": "Find me on YouTube",
    "date_created": new Date ('2024-3-20'),
    "user_id": 1,
  },
];

const seedPosts = () => Post.bulkCreate(PostData);

module.exports = seedPosts;