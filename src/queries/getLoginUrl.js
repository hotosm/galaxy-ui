import axios from "axios";

export const getLoginURL = async () => {
  const { data } = await axios.get('http://127.0.0.1:8000/auth/login');
  return data;
}
