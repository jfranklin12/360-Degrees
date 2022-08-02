const { School } = require("../models");

const schoolSeedData = [
    {
        school_name: "Georgia Tech",
        school_state: "GA",
    },
];

const seedSchool = () => School.bulkCreate(schoolSeedData);

module.exports = seedSchool;