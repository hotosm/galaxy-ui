import React from 'react'
import { useQuery } from 'react-query';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import axios from "./../axios";

const OrgContribution = props =>
{

    const fetchStats = async () => {
        try {
          //check api route
          const res = await axios.get("/key-stats/asia/Philippines/building");
    
          if (res.error) {
            console.log("Error", res.error);
            return;
          }
    
          if (!res) {
            console.log("No response");
            return;
          }
          console.log("res.data", res.data);
          // res.data.forEach((d) => {
          //   d.by_month_osm = moment(d.by_month_osm).valueOf(); // date -> epoch
          // });
          return res.data;
        } catch (err) {
          console.log("Unexpected Error", err);
        }
      };
    
      const { data, refetch } = useQuery("fetchStats", fetchStats);
    
      const startDate = new Date(2008, 1, 1);
      const endDate = new Date(2021, 7, 31);
      const formatXAxis = tickItem => {
        return new Date(tickItem).getMonth() + '-' + new Date(tickItem).getFullYear() ;
      }
    return <>
     <div>
        <select>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="africa">Central America</option>
          <option value="africa">South America</option>
        </select>
        <input type="text" placeholder="Country"></input>
        <input type="text" placeholder="Key"></input>

        {data && (
          <LineChart
            data={data}
            width={1000}
            height={300}
            margin={{ left: 20, right: 10 }}
          >
            <XAxis
              dataKey="by_month_osm"
              reversed
              tickFormatter={formatXAxis}
            />
            <YAxis domain={[0, 12000000]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="accmulative_total_hot"
              stroke="#8884d8"
            />

            <Line
              type="monotone"
              dataKey="accmulative_total_osm"
              stroke="#82ca9d"
            />
          </LineChart>
        )}
      </div>
    </>;
}

export default OrgContribution;