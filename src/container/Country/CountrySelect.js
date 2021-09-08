import React from 'react'
import { useQuery } from 'react-query';

import axios from '../../axios'

const CountrySelect = props =>
{
    const fetchLoadedCountries = async () => {
        try {
          //check api route
          const res = await axios.get(`/loaded_countries`);
    
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

    const { data,  isLoading } = useQuery("fetchLoadedCountries", fetchLoadedCountries);
    return <>

     <select defaultValue="Select a country"
       onChange={props.onChange}>
        
          {isLoading &&  <option value="Select a country">Loading ..</option>}
          {data && !isLoading && 
          <>
          <option value="Select a country">Select a country</option>
          {data.map (item => (
            <option key={item.name_en} value={item.name_en} >{item.name_en}</option>
          ))}
          </>
          }
        </select>

    </>

}
export default CountrySelect;