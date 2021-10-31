import React, { useEffect, useState } from "react";
import { addHours, differenceInHours } from "date-fns";
import { useMutation} from "react-query";
import { ReportForm } from "../components/forms";
import { MapathonSummaryResults } from '../components/mapathonResults';
import { getMapathonSummaryReport } from "../queries/index";
import { Error } from '../components/formResponse';

export const MapathonSummaryReport = () => {
    const [formData, setFormData] = useState({
        startDate: addHours(new Date(), -1),
        endDate: new Date(),
        TMProjectIds: "",
        mapathonHashtags: ""
    });

    const [formError, setFormError] = useState(null)

    const handleChange = (e) => {
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        setFormError(null);
    }, [formData])

    const handleValidation = () => {
        const { startDate, endDate, TMProjectIds, mapathonHashtags } = formData;
        let validDate = false;
        let validIdsOrHashtags = false;
        
        if ((differenceInHours(endDate, startDate) <= 24) && differenceInHours(endDate, startDate) > 0){
            validDate = true;
        } else {
            setFormError("Invalid Time");
        }
        if (TMProjectIds.length === 0 && mapathonHashtags.length === 0) {
            setFormError("Missing fields");
        }
        if (TMProjectIds.length > 0) {
            if (TMProjectIds.split(',').every(i => Number.isInteger(Number(i)))) {
                validIdsOrHashtags = true;
            }      
            else {
                setFormError("Invalid IDs")
            }
        }
        if (mapathonHashtags.length > 0) {
            validIdsOrHashtags = true;
        }
        return validDate && validIdsOrHashtags;
    }

    const { mutate, data, isLoading } = useMutation(getMapathonSummaryReport, {
        onError: (error) => {
            setFormError("Server Error")
        },
        // onSettled: () => {
        //   queryClient.invalidateQueries('create');
        // }
      });

 
    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = handleValidation()
        if (isValid) {
            mutate(formData); // API call
            setFormError(null);
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
            {formError && <Error error={formError} />}
            {isLoading && (<div className="mx-auto text-center w-1/4 p-1 mt-5">Loading...</div>)}
            {data && (<MapathonSummaryResults data={data}/>)}
        </div>
    )
}
