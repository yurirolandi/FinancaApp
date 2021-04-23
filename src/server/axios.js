import axios from "axios";

export const requestAxios = axios.create({
  baseURL: "http://localhost:3000/",
});
