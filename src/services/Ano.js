import { requestAxios } from "./axios";

export const AnoService = {
  get: (id) => {
    return requestAxios.get(`/ano/${id}`).then((response) => response.data);
  },
};
