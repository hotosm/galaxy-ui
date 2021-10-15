import axios from "axios";

export const getMapathonSummaryReport = async (requestData) => {
    const { startDate, endDate, TMProjectIds, mapathonHashtags } = requestData;
    let body = {
        "fromTimestamp": startDate.toISOString(),
        "toTimestamp": endDate.toISOString(),
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
    
    const { data } = await axios.post('https://osm-stats.hotosm.org/mapathon/summary', body);
    return data;
};

// let body = {
    //         "projectIds": [
    //           111
    //         ],
    //         "fromTimestamp": "2021-09-01T00:00:00",
    //         "toTimestamp": "2021-09-01T01:00:00",
    //         "hashtags": []
    //     }
