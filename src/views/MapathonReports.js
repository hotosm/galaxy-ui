import React from "react";
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { MapathonReportForm } from "../components/mapathon/mapathonReportForm";
import { 
    getMapathonSummaryReport, 
    getMapathonDetailedReport 
} from "../queries/index";
import { 
    MapathonSummaryResults, 
    TableResults as MapathonDetailedResults
} from '../components/mapathon/mapathonResults';
import { Authorisation } from "../components/auth";
// import { sampleData } from '../utils/sortMapathonResultsData';

export const MapathonSummaryReport = () => {
    const { mutate, data, isLoading, error } = useMutation(getMapathonSummaryReport);
    return (
        <div>
            <MapathonReportForm
                  error={error ? 'Server Error' : null}
                  fetch={mutate}
              />
            <Authorisation origin={"mapathon"}/>
            {isLoading && (<div className="mx-auto text-center w-1/4 p-1 mt-5">Loading...</div>)}
            {data && (<MapathonSummaryResults data={data}/>)}
        </div>
    )
};

export const MapathonDetailedReport = () => {
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const token = useSelector((state) => state.auth.accessToken);
    
    const { mutate, data, isLoading, error } = useMutation(getMapathonDetailedReport, {});
  
    if (token && loggedIn) {
        return (
            <div>
                <MapathonReportForm
                    error={error ? 'Server Error' : null}
                    fetch={mutate}
                />
                {isLoading && (<div className="mx-auto text-center w-1/4 p-1 mt-5">Loading...</div>)}
                {data && (<MapathonDetailedResults data={data}/>)}
                {/* <MapathonDetailedResults data={sampleData}/> */}
            </div>
        )
    } else {
        return (
            <div className="text-center"> 
                <p className="text-red text-xl">Please log in first to view detailed report</p>
            </div>
        )
    }
  }  
