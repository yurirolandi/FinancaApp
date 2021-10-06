import { requestAxios } from "./axios";

export const tokenService = {
  post: (body) => {
    const url = `/token/`;

    return requestAxios.post(url, body).then((response) => response.data);
  },
};
