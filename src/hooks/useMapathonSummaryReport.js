import { useQuery } from "react-query";
import axios from "axios";

export function usePosts() {
    return useQuery("posts", async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    });
}

const getMapathonSummaryReport = async (fromTimeStamp, toTimestamp, projectIds, hashtags) => {
    let url = `http://127.0.0.1:8000/changesets/features/count?fromTimestamp=${fromTimeStamp}&toTimestamp=${toTimestamp}`
    if (projectIds &&  projectIds.length > 0){
        url = `${url}&projectIds=${projectIds}`
    }
    if (hashtags && hashtags.length > 0){
        url = `${url}&hashtags=${hashtags}`
    }

    console.log(url)
    const { data } = await axios.get(url);
   
    return data;
};

export default function useMapathonSummaryReport(fromTimeStamp, toTimestamp, projectIds, hashtags) {
    console.log(fromTimeStamp, toTimestamp, projectIds, hashtags)
  return useQuery(['summaryReport', {fromTimeStamp, toTimestamp, projectIds, hashtags}], getMapathonSummaryReport, {
    refetchOnWindowFocus: false,
    // enabled: false // turned off by default, manual refetch is needed
  });
}
