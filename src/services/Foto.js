import { requestFoto } from "./axios";

export const FotosService = {
  create: (body) => {
    return requestFoto.post("/fotos/", body).then((response) => response.data);
  },
};
