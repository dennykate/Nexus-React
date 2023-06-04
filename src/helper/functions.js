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

export const storeForFrequent = (search) => {
  const frequentStr = Cookies.get("frequents");
  let frequents = [];
  if (frequentStr) {
    frequents = JSON.parse(frequentStr);
  }

  let newFrequents;
  const isExistInCookie = frequents.find(
    (frequent) => frequent.id === search.id
  );

  if (isExistInCookie) {
    newFrequents = frequents.map((frequent) => {
      if (frequent.name == search.name && frequent.email == search.email) {
        frequent.searchCount += 1;
      }
      return frequent;
    });
  } else {
    newFrequents = [...frequents, { ...search, searchCount: 1 }];
  }

  Cookies.set("frequents", JSON.stringify(newFrequents));
};
