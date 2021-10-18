import axios from "axios";
import Login from "../store/Modules/Login";
import { getStorage } from "../utils/localStorage";

const headers = { "Content-Type": "application/json" };

const token = getStorage("Token") || Login.state.Token;

if (token) {
  headers["Authorization"] = `Bearer ${token}`;
}

export const requestAxios = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers,
});

export const requestFoto = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: { "content-type": "multipart/form-data" },
});
