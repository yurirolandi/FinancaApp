import axios from "axios";
import { API } from "../environment";

export const requestAxios = axios.create({
  baseURL: `${API}/endpoint`,
});
