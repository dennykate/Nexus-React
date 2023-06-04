import axios from "axios";
import { randomColors } from "../utils/data.js";
import Cookies from "js-cookie";

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
          Authorization: "Bearer 359|K40DVNveVLD7gQI3eGmjconYfvqOFQMsKw6ApBP8",
        },
      }
    );

    dataArr.push(...data.contacts.data);
  }

  // console.log(dataArr);

  return dataArr;
};

export const sortFrequent = (frequents) => {
  const sortedFrequents = frequents.sort(
    (a, b) => b.searchCount - a.searchCount
  );

  return sortedFrequents;
};
