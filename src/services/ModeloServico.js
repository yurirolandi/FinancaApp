import { requestAxios } from "./axios";

export const ApiService = {
  get: () => {
    const url = "Get";

    return requestAxios.get(url).then((response) => response.data);
  },
  create: (body) => {
    const url = "Post";

    return requestAxios.post(url, body).then((response) => response.data);
  },
  update: (body) => {
    const url = "Update";

    return requestAxios.post(url, body).then((response) => response.data);
  },
  delete: (body) => {
    const url = "Delete";

    return requestAxios.post(url, body).then((response) => response.data);
  },
};
