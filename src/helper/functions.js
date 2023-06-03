import { randomColors } from "../utils/data.js";
import axios from "axios";

export const getRandomColor = () => {
  return randomColors[Math.ceil(Math.random() * randomColors.length)];
};
