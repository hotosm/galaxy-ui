import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormattedMessage, useIntl } from "react-intl";
import { SubmitButton } from "./button";
import messages from "./messages";

export const ReportForm = ({ 
    formData,
    setFormData, 
    onSubmit, 
    onChange
}) => {
    const intl = useIntl();

    return (
      <form onSubmit={onSubmit} className="mt-4 px-4">
        <div className="grid grid-cols-8 gap-4">
            <div className="space-y-20 py-2 col-span-2">
                <div className="text-xl">
                    <label>
                        <span className="text-red">* </span>
                        <FormattedMessage {...messages.mapathonSummaryFormStartDate}/>:
                    </label>
                    <DatePicker
                        selected={formData.startDate}
                        onChange={(date) => {
                            setFormData({
                                ...formData,
                                startDate: date
                            });
                        }}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="d MMMM, yyyy h:mm aa"
                        className="w-full p-2 block  border border-grey-light mt-5"
                    />
                </div>
                <div className="text-xl">
                    <label>
                        <span className="text-red">* </span>
                        <FormattedMessage {...messages.mapathonSummaryFormEndDate}/>:
                    </label>
                    <DatePicker
                        selected={formData.endDate}
                        onChange={(date) => {
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
                        className="w-full p-2 block  border border-grey-light mt-5"
                    />
                </div>
            </div>
            <div className="flex flex-col py-2 col-span-3 text-xl">
                <label>
                <FormattedMessage {...messages.mapathonSummaryFormProjectIds}/>:
                </label>
                <textarea
                    name="TMProjectIds"
                    rows="7"
                    placeholder={intl.formatMessage(messages.mapathonSummaryFormIdsPlaceholder)}
                    value={formData.TMProjectIds}
                    onChange={onChange}
                    className="mt-5 blue-grey w-100 py-3 px-2 border border-grey-light bg-transparent focus:outline-none resize-none"
                /> 
            </div>
            <div className="flex flex-col py-2 col-span-3 text-xl">
                <label>
                    <FormattedMessage {...messages.mapathonSummaryFormHashtags}/>:
                </label>
                <textarea
                    name="mapathonHashtags"
                    rows="7"
                    placeholder={intl.formatMessage(messages.mapathonSummaryFormHashtagsPlaceholder)}
                    value={formData.mapathonHashtags}
                    onChange={onChange}
                    className="mt-5 blue-grey w-100 py-3 px-2 border border-grey-light bg-transparent focus:outline-none resize-none"
                />
            </div>
        </div>
            <div className="text-center mt-4">
                <SubmitButton styles="py-3 px-10 text-xl">
                    Submit Your Query
                </SubmitButton>
            </div>
      </form>
    )
}
