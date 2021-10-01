import { requestAxios } from "./axios";

export const usersService = {
  get: () => {
    const url = `users/`;

    return requestAxios.get(url).then((response) => response.data);
  },
  create: (body) => {
    const url = "users/";

    return requestAxios.post(url, body).then((response) => response.data);
  },
  update: (body) => {
    const url = `users/`;

    return requestAxios.post(url, body).then((response) => response.data);
  },
  delete: (body) => {
    const url = `users/`;

    return requestAxios.post(url, body).then((response) => response.data);
  },
};
