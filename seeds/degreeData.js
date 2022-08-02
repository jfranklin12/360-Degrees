const { Degree } = require("../models");

const degreeSeedData = [
    {
        degree_name: "Engineering",
        score_value: 90,
    },
];

const seedDegree = () => Degree.bulkCreate(degreeSeedData);

module.exports = seedDegree;