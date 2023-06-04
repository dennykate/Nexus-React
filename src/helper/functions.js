import { randomColors } from "../utils/data.js";

export const getRandomColor = () => {
  return randomColors[Math.ceil(Math.random() * randomColors.length)];
};

console.log(getRandomColor());
