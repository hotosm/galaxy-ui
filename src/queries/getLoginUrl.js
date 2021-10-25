import axios from "axios";
import { API_URL } from "../config";

export const getLoginURL = async () => {
  const { data } = await axios.get(`${API_URL}/auth/login`);
  return data;
}
