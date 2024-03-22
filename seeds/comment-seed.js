const { Comment } = require('../models')

const CommentData = [
    {
        "comment": "nice",
        "date_created": new Date ('2024-3-20'),
        "user_id": 2,
        "post_id": 1,
    }
];

const seedComments = () => Comment.bulkCreate(CommentData);

module.exports = seedComments;