import axios from "axios";
import { faker } from "@faker-js/faker";

const seeding = async (count) => {
  for (let i = 0; i < count; i++) {
    const name = faker.person.firstName();
    const email = faker.internet.email();
    const phone = "+959964" + Math.floor(Math.random() * 1000000);
    const address = faker.person.bio();

    const { data } = await axios.post(
      "https://contact-app.mmsdev.site/api/v1/contact",
      { name, email, phone, address },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 66|KCSv6Z1mAxbTKNf1HQ2cqTq0aTCAfoN3Rty60xPt",
        },
      }
    );

    console.log(data);
  }
};

seeding(20);
