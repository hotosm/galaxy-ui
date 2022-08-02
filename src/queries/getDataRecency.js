import axios from "axios";
import { API_URL } from "../config";

export const getDataRecency = async (requestData) => {
  const { source, output } = requestData;
  let requestBody = {
    dataSource: source,
    dataOutput: output,
  };
  const { data } = await axios.post(`${API_URL}/status/`, requestBody);
  return data;
};
