import axios from "axios";
import { randomColors } from "../utils/data.js";

export const getRandomColor = () => {
  return randomColors[Math.ceil(Math.random() * randomColors.length)];
};

export const getAllContacts = async (page) => {
  let dataArr = [];

  for (let i = 1; i <= page; i++) {
    const { data } = await axios.get(
      `https://contact-app.mmsdev.site/api/v1/contact?page=${i}`,
      {
        headers: {
          Authorization: "Bearer 383|LDXcEVKOBJQPx0O61uvB8LeJNOpI6JubU4tkHr6A",
        },
      }
    );

    dataArr.push(...data.contacts.data);
  }

  // console.log(dataArr);

  return dataArr;
};
