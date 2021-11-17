import axios from "axios";
import { API_URL } from "../config";
import { convertStringToArray } from "../utils/formatInputs";

export const getUserStats = async (id, requestData) => {
  const { startDate, endDate, mapathonHashtags } = requestData;
  let body = {
    "userId":id,
    "fromTimestamp": startDate.toISOString(),
    "toTimestamp":  endDate.toISOString(),
    "projectIds": [],
    "hashtags": convertStringToArray(mapathonHashtags)
};
  
  const { data } = await axios.post(`${API_URL}/osm-users/statistics`, body);
  return data;
};

export const getUserIds = async (requestData) => {
  const { startDate, endDate, usernames } = requestData;
  let userBody = {
    "userNames": convertStringToArray(usernames),
    "fromTimestamp": startDate.toISOString(),
    "toTimestamp": endDate.toISOString(),
  }
  const { data } = await axios.post(`${API_URL}/osm-users/ids`, userBody);

  let userResult = [...data];

  for (let i = 0; i< data.length; i++) {
      userResult[i].stats = await getUserStats(data[i].userId, requestData)
  }

  return userResult;
}

