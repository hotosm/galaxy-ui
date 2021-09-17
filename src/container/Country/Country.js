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
          const res = await axios.get(`/country-insights/${country}`);
    
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
       {data && data.countryBuildingsByMonth.length > 0 && !isLoading && (
          <LineChart
            data={data.countryBuildingsByMonth}
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
          <Line
              type="monotone"
              dataKey="tm_building_count"
              stroke="#FF5555"
              
            />
            {/* <Line
              type="monotone"
              dataKey="accmulative_total_osm"
              stroke="#82ca9d"
            /> */}
          </LineChart>
        )}
        {data && data.countryBuildingsByMonth.length === 0 && 
        <h3>Buildings are not yet calculated, contact hot tech team over <a href="https://hotosm.atlassian.net/servicedesk/customer/portals" target="_blank"> here </a></h3>
        }
      
      
      <div style={{ textAlign: "left" }}>
       <p><span style={{color: "#8884d8"}}>building_count</span>: refers to the total mapped ways + relations in OSM that have tag building=*</p>

       <p><span style={{color: "#FF5555"}}>tm_building_count</span>: refers to the total mapped ways + relations in OSM that have tag building=* <strong>and came through HOT TM</strong> through "hotosm" hashtag in the comments or hashtags of the changeset</p>
       </div>


       <div>
       {data && data.countryValidatedBuildings.length === 1 && 
        <h3>{data.countryValidatedBuildings[0].validated_buildings} Validated buildings</h3>
        }
        <p><span>Validated buildings</span>: refers to the total # of OSM elelemts ways + relations in OSM that is intersecting with the boundary of a validated task in HOT TM</p>
      </div>


       </div>
       
    </>;


}

export default Country;