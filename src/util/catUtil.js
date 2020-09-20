import { getRandomInRange } from "./mathUtil";

function getRandomSizeCat(min, max) {
  const width = getRandomInRange(min, max);
  const height = getRandomInRange(min, max);
  return `//www.lorempixel.com/${width}/${height}/cats`;
}

export { getRandomSizeCat };
