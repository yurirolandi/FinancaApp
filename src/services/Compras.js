import { requestAxios } from "./axios";

export const ComprasService = {
  get: (id) => {
    const url = `/items/meses/${id}`;

    return requestAxios.get(url).then((response) => response.data);
  },
  create: (body) => {
    const url = "/items/meses/";

    return requestAxios.post(url, body).then((response) => response.data);
  },
  update: (body, id) => {
    const url = `/items/meses/${id}`;

    return requestAxios.post(url, body).then((response) => response.data);
  },
  delete: (body, id) => {
    const url = `/items/meses/${id}`;

    return requestAxios.post(url, body).then((response) => response.data);
  },
};
