import axios from "axios";

export const getMapathonSummaryReport = async (requestData) => {
    const { startDate, endDate, TMProjectIds, mapathonHashtags } = requestData;
    let body = {
        fromTimestamp: startDate.toISOString(),
        toTimestamp: endDate.toISOString(),
    }

    if (TMProjectIds.length > 0){
        body.projectsIds = TMProjectIds.split(',').map((i) => Number(i)).filter((x) => x !== 0);
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
        body.hashtags = arr.filter((j) => j.match(pattern))
    }
    
    const { data: response } = await axios.post('https://osm-stats.hotosm.org/mapathon/summary', body);
    return response.data;
};
