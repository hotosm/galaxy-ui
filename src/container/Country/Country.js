import React from 'react'
import LoadedCountries from './LoadedCountries'
import './Country.css'
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import axios from "../../axios";
import { useMutation, useQuery } from 'react-query';
import { useState } from 'react';
import CountrySelect from './CountrySelect';

const Country = props =>
{

    const [selectedCountry, setselectedCountry] = useState('')

    const fetchStats = async (country) => {
        try {
          //check api route
          const res = await axios.get(`/buildings/${country}`);
    
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
    
      const {mutate, data,  isLoading } = useMutation("fetchStats", fetchStats);
    
      const formatXAxis = tickItem => {
        return new Date(tickItem).getMonth() + '-' + new Date(tickItem).getFullYear() ;
      }

      const countrySelectHandler = event =>
      {
            setselectedCountry(event.target.value);

            mutate(event.target.value);
      }
    return <>
        <LoadedCountries />
       <div className="country-insights">
       <CountrySelect  onChange={countrySelectHandler} >
         
        </CountrySelect>

        {isLoading && <p>loading ..... </p>}
       {data && data.length > 0 && !isLoading && (
          <LineChart
            data={data}
            width={1000}
            height={300}
            margin={{ left: 20, right: 10 }}
          >
            <XAxis
              dataKey="by_month"
              
              tickFormatter={formatXAxis}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="building_count"
              stroke="#8884d8"
            />

            {/* <Line
              type="monotone"
              dataKey="accmulative_total_osm"
              stroke="#82ca9d"
            /> */}
          </LineChart>
        )}
        {data && data.length === 0 && 
        <h3>Buildings are not yet calculated, contact hot tech team over <a href="https://hotosm.atlassian.net/servicedesk/customer/portals" target="_blank"> here </a></h3>
        }
       </div>
    </>;


}

export default Country;