import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SubmitButton } from "./button";

export const ReportForm = ({ 
    formData,
    setFormData, 
    onSubmit, 
    onChange,
    setFormError
}) => {
    return (
      <form onSubmit={onSubmit} className="mt-4 px-4">
        <div className="grid grid-cols-3 gap-4">
            <div className="space-y-14 py-2">
                <div>
                    <label><span className="text-red">* </span>Start Date:</label>
                    <DatePicker
                        selected={formData.startDate}
                        onChange={(date) => {
                            // setFormError(null);
                            setFormData({
                                ...formData,
                                startDate: date
                            });
                        }}
                        // timeInputLabel="Time:"
                        // dateFormat="MM/dd/yyyy h:mm aa"
                        // showTimeInput
                        showTimeSelect
                        // minDate={Date.parse(new Date(5, 9, 2021))}
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat=" d MMMM, yyyy h:mm aa"
                        className="w-11/12 p-2 block mb-2 border border-grey-light mt-5"
                    />
                </div>
                <div>
                    <label><span className="text-red">* </span>End Date:</label>
                    <DatePicker
                        selected={formData.endDate}
                        onChange={(date) => {
                            // setFormError(null);
                            setFormData({
                                ...formData,
                                endDate: date
                            });
                        }}
                        minDate={formData.startDate}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat=" d MMMM, yyyy h:mm aa"
                        className="w-11/12 p-2 block mb-2 border border-grey-light mt-5"
                    />
                </div>
            </div>
            <div className="flex flex-col py-2">
                <label>Tasking Manager Project IDs</label>
                <textarea
                    name="TMProjectIds"
                    rows="7"
                    placeholder="Enter the Tasking Manager Project IDs separated by commas"
                    value={formData.TMProjectIds}
                    onChange={onChange}
                    className="mt-5 blue-grey w-100 py-3 px-2 border border-grey-light bg-transparent focus:outline-none resize-none"
                /> 
            </div>
            <div className="flex flex-col py-2">
                <label>Mapathon Hashtags</label>
                <textarea
                    name="mapathonHashtags"
                    rows="7"
                    placeholder="Enter the hashtags separated by commas"
                    value={formData.mapathonHashtags}
                    onChange={onChange}
                    className="mt-5 blue-grey w-100 py-3 px-2 border border-grey-light bg-transparent focus:outline-none resize-none"
                />
            </div>
        </div>
 
            <div className="text-center mt-4">
                <SubmitButton styles="py-3 px-10">
                    Submit Your Query
                </SubmitButton>
            </div>
      </form>
    )
}
