import React, { useEffect, useState } from "react";
import { addHours, differenceInHours } from "date-fns";
import { ReportForm } from "../components/forms";
import { MapathonSummaryResults } from '../components/mapathonResults'
import { Error } from '../components/formResponse'

export const MapathonSummaryReport = () => {
    const [formData, setFormData] = useState({
        startDate: addHours(new Date(), -1),
        endDate: new Date(),
        TMProjectIds: "",
        mapathonHashtags: ""
    });

    // to be sent via API call
    const [requestData, setRequestData] = useState({
        fromTimestamp: "",
        toTimestamp: "",
        TMProjectIds: [],
        mapathonHashtags: []
    });

    const [formError, setFormError] = useState(null)

    const handleChange = (e) => {
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        setFormError(null)
    }, [formData])

    const handleValidation = () => {
        const { startDate, endDate, TMProjectIds, mapathonHashtags } = formData;
        let validDate = false;
        let validIdsOrHashtags = false;
        
        if ((differenceInHours(endDate, startDate) <= 24) && differenceInHours(endDate, startDate) > 0){
            validDate = true;
            // setRequestData({
            //     ...requestData,
            //     fromTimestamp: startDate,
            //     toTimestamp: endDate
            // });
        } else {
            setFormError("Invalid Time")
        }
        if (TMProjectIds.length === 0 && mapathonHashtags.length === 0) {
            setFormError("Missing fields")
        }
        if (TMProjectIds.length > 0) {
            let arr = TMProjectIds.split(',')
            if (arr.every(i => Number.isInteger(Number(i)))) {
                // setRequestData({
                //     ...requestData,
                //     TMProjectIds: arr.map((i) => Number(i)).filter((x) => x !== 0)
                // })
                validIdsOrHashtags = true;
            }      
            else {
                setFormError("Invalid IDs")
            }
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
            validIdsOrHashtags = true;
 
            // setRequestData({
            //     ...requestData,
            //     mapathonHashtags: arr.filter((j) => j.match(pattern))
            // })
        }
        return validDate && validIdsOrHashtags;
    }
 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(handleValidation())
        let isValid = handleValidation()
        if (isValid) {
             // API call
             setFormError(null)
             console.log("submitted")
        } else {
            setFormError("Server Error")
            return
        }
    }

    return (
        <div>
            <ReportForm 
                formData={formData}
                setFormData={setFormData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                setFormError={setFormError}
            />
            {formError && <Error error={formError} />}
            {/* {status === 'loading' && (<div className="mx-auto">Loading...</div>)} */}
            <MapathonSummaryResults />
        </div>
    )
}
