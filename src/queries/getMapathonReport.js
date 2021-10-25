import axios from "axios";
import { API_URL } from "../config";
import * as safeStorage from '../utils/safeStorage';

const formatMapathonRequestData = (requestData) => {
    const { startDate, endDate, TMProjectIds, mapathonHashtags } = requestData;
    let body = {
        "fromTimestamp": startDate.toISOString().replace('Z', ''),
        "toTimestamp": endDate.toISOString().replace('Z', ''),
        "projectIds": [],
        "hashtags": []
    }

    if (TMProjectIds.length > 0){
        body["projectIds"] = TMProjectIds.split(',').map((i) => Number(i)).filter((x) => x !== 0);
    }

    if (mapathonHashtags.length > 0) {
        let arr = mapathonHashtags
            .split(',')
            .map((i) => {
                i = i.toString().trim();
                if(i.startsWith('#')) i = i.substr(1)
                return i  
            })
        let pattern = /([a-zA-Z0-9])\w+/gi
        body["hashtags"] = arr.filter((j) => j.match(pattern))
    }

    return body;
}

export const getMapathonSummaryReport = async (requestData) => {
    let body = formatMapathonRequestData(requestData)
    
    const { data } = await axios.post(`${API_URL}/mapathon/summary`, body);
    return data;
};

export const getMapathonDetailedReport = async (requestData) => {
    const token = safeStorage.getItem("token");
    const config = {
        headers: { 
            "access-token": token
        }
    };
    let body = formatMapathonRequestData(requestData);

    const { data } = await axios.post(`${API_URL}/mapathon/detail`,
    body, 
    config
    );
    return data;
};
