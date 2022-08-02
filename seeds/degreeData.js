const { Degree } = require("../models");

const degreeSeedData = [
    {

  },
    {
    
    },
  {
    
  },
  {
    
  },
  {
    
  },
];

const seedDegree = () => Degree.bulkCreate(degreeSeedData);

module.exports = seedDegree;