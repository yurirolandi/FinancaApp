import { requestAxios } from "./axios";

export const FotosService = {
  create: (body) => {
    const url = "/fotos/";

    return requestAxios.post(url, body).then((response) => response.data);
  },
};
