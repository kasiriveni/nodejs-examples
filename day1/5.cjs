const { random } = require("lodash");

function getRandomNumber() {
  return random(0, 50);
}

const getRandName = (name) => console.log(name);

module.exports = { getRandomNumber, getRandName };
