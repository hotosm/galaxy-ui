import React, { useState } from "react";
import { addHours, differenceInHours } from "date-fns";
import { ReportForm } from "../components/forms";


export const MapathonSummaryReport = () => {
    const [formData, setFormData] = useState({
        startDate: addHours(new Date(), -1),
        endDate: new Date(),
        TMProjectIds: "",
        mapathonHashtags: ""
    });

    // to be sent via API call
    const [requestData, setRequestData] = useState({
        startDate: addHours(new Date(), -1),
        endDate: new Date(),
        TMProjectIds: [],
        mapathonHashtags: []
    })
    // console.log("formData")
    // console.log(formData)
    // console.log("requestData")
    // console.log(requestData)

    const handleValidation = () => {
        const { startDate, endDate, TMProjectIds, mapathonHashtags } = formData;
        let valid = false;

        if (differenceInHours(endDate, startDate) <= 24) {
            valid = true
            setRequestData({
                ...requestData,
                startDate,
                endDate
            })
        } else {
            console.log("time > 24 hours")
        }
        if (TMProjectIds.length === 0 && mapathonHashtags.length === 0) {
            valid = false
            console.log("empty")
        }
        if (TMProjectIds.length > 0) {
            let arr = TMProjectIds.split(',')
            if (arr.every(i => Number.isInteger(Number(i)))) {
                valid = true
                setRequestData({
                    ...requestData,
                    TMProjectIds: arr.map(i => Number(i)).filter(x => x !== 0)
                })
            }
            else {
                console.log("invalid inputs: numbers only")
            }
        }
        if (mapathonHashtags.length > 0) {
            valid = true
            let arr = mapathonHashtags
            .split(',')
            .map((i) => {
                i = i.toString().trim();
                if(i.startsWith('#')) i = i.substr(1)
                return i  
            })
            let pattern = /([a-zA-Z0-9])\w+/gi
 
            setRequestData({
                ...requestData,
                mapathonHashtags: arr.filter((j) => j.match(pattern))
            })
        }
        return valid
    }

    const handleChange = (e) => {
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = handleValidation()
        if (isValid) {
            console.log("submitted")
        } else {
            console.log("error")
        }
    }
    return (
        <div>
            <ReportForm 
                formData={formData}
                setFormData={setFormData}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {/* <Link to="/mapathon-detailed-report" className=" text-red underline mt-5">
                Sign in to View Detailed Report &gt;&gt;
            </Link> */}
            {/* <QueryResults /> */}
        </div>
    )
}
