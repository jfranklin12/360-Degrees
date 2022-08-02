const { Degree } = require("../models");

const degreeSeedData = [
    {
        degree_name: "Engineering",
        score_value: 90,
    },
    {
        degree_name: "Biology",
        score_value: 85,
    },
    {
        degree_name: "English",
        score_value: 75,
    },
    {
        degree_name: "Mathematics",
        score_value: 65,
    },
    {
        degree_name: "Web Development",
        score_value: 100,
    },
];

const seedDegree = () => Degree.bulkCreate(degreeSeedData);

module.exports = seedDegree;