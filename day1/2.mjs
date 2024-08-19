import lodash from "lodash";
const { random } = lodash;

function getRandomNumber() {
  return random(0, 70);
}

const getName = (name) => console.log(name);

export { getRandomNumber, getName };
