import { requestAxios } from "./axios";

export const MesesService = {
  get: (id) => {
    const url = `/meses/${id}`;

    return requestAxios.get(url).then((response) => response.data);
  },
};
