import { requestAxios } from "./axios";
const ano = new Date().getFullYear();
export const ComprasService = {
  get: (id) => {
    const url = `/items/${id}/${ano}/meses/`;

    return requestAxios.get(url).then((response) => response.data);
  },
  create: (body, id) => {
    const url = `/items/${id}/${ano}/meses/`;

    return requestAxios.post(url, body).then((response) => response.data);
  },
  update: (body, id) => {
    const url = `/items/${id}/${ano}/meses/`;

    return requestAxios.post(url, body).then((response) => response.data);
  },
  delete: (body, id) => {
    const url = `/items/${id}/${ano}/meses/`;

    return requestAxios.post(url, body).then((response) => response.data);
  },
};
