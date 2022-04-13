import axios from "axios";
import { API_URL } from "../config";
import * as safeStorage from "../utils/safeStorage";
import {
  convertStringToArray,
  convertStringToNumberArray,
} from "../utils/formatInputs";

const formatMapathonRequestData = (requestData) => {
  const { startDate, endDate, TMProjectIds, mapathonHashtags } = requestData;
  let body = {
    fromTimestamp: startDate.toISOString().replace("Z", ""),
    toTimestamp: endDate.toISOString().replace("Z", ""),
    projectIds: convertStringToNumberArray(TMProjectIds),
    hashtags: convertStringToArray(mapathonHashtags),
  };
  return body;
};

export const getMapathonSummaryReport = async (requestData) => {
  let body = formatMapathonRequestData(requestData);

  const { data } = await axios.post(`${API_URL}/mapathon/summary`, body);
  return data;
};

export const getMapathonDetailedReport = async (requestData) => {
  const token = safeStorage.getItem("token");
  const config = {
    headers: {
      "access-token": token,
    },
  };
  let body = formatMapathonRequestData(requestData);

  const { data } = await axios.post(`${API_URL}/mapathon/detail`, body, config);
  return data;
};
