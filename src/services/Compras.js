import { requestAxios } from "./axios";
export const ComprasService = {
  get: (id) => {
    const url = `/items/${id}/mes`;

    return requestAxios.get(url).then((response) => response.data);
  },
  create: (body, id) => {
    const url = `/items/${id}/mes`;

    return requestAxios.post(url, body).then((response) => response.data);
  },
  update: (body, id) => {
    const url = `/items/${id}/mes`;

    return requestAxios.put(url, body).then((response) => response.data);
  },
  delete: (id) => {
    const url = `/items/${id}/mes/`;
    return requestAxios.delete(url).then((response) => response.data);
  },
};
