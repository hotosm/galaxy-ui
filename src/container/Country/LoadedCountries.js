import React from 'react'
import { useQuery } from 'react-query';
import axios from '../../axios'

const LoadedCountries = props =>
{

    const loadedCountries = async () =>
    {
        try {
            //check api route
            const res = await axios.get("/loaded_countries");
      
            if (res.error) {
              console.log("Error", res.error);
              return;
            }
      
            if (!res) {
              console.log("No response");
              return;
            }
            console.log("loaded_countries", res.data);
            // res.data.forEach((d) => {
            //   d.by_month_osm = moment(d.by_month_osm).valueOf(); // date -> epoch
            // });
            return res.data;
          } catch (err) {
            console.log("Unexpected Error", err);
          }

    }
    const {data, isLoading} = useQuery('loadedCountries',loadedCountries)
    return <>

         <div class="w3-sidebar w3-light-grey w3-bar-block" >
          <h3 class="w3-bar-item">Loaded Countries</h3>
          {data && 
          data.map(item => (

            <a key={item.name_en}  class="w3-bar-item w3-button">{item.name_en}</a>
          ))
          }
         
          
        </div>
    </>;


}

export default LoadedCountries;