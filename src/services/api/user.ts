import { faker } from "@faker-js/faker";
import { BERRY_STAMP_USERKEY, setLocalStorage } from "../../utils/helper";

const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomNumber = faker.phone.number();
const userBody = {
  name: randomName,
  email: randomEmail,
  phone: randomNumber,
};
export const loginUser = async (_: any) => {
  //mimiking login endpoint
  mock(userBody)
    .then((res) => {
      setLocalStorage(BERRY_STAMP_USERKEY, res);
      window.location.href = "/";
    })
    .catch((err) => console.log(err));
};

const mock = (body: any) => {
  const timeout = Math.random() * 4000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(body);
    }, timeout);
  });
};
