import { getRandomInRange } from "./mathUtil";

function getRandomSizeCat(min, max) {
  const width = getRandomInRange(min, max);
  const height = getRandomInRange(min, max);
  return `http://placekitten.com/g/${width}/${height}`;
}

export { getRandomSizeCat };
