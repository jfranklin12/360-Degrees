const { Review } = require("../models");

const reviewSeedData = [
    {
        score_1: 9,
        score_2: 4,
        score_3: 7,
        score_4: 2,
        comment: "This is a good test",
    },
];

const seedReview = () => Review.bulkCreate(reviewSeedData);

module.exports = seedReview;