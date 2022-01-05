import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { differenceInMinutes } from "date-fns";
import { FormattedMessage, useIntl } from "react-intl";
import "react-datepicker/dist/react-datepicker.css";
import { SubmitButton } from "../button";
import { Error } from '../formResponse';
import messages from "../messages";

export const UserGroupReportForm = ({fetch, error, formData, setFormData, setUsers }) => {
  const intl = useIntl();

  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (error) setFormError(error)
    else setFormError(null);
  }, [formData, error])

  const handleChange = (e) => {
      setFormData({ 
          ...formData, 
          [e.target.name]: e.target.value
      });
  };

  const handleValidation = () => {
    const { startDate, endDate } = formData;
    let validDate = false;
    
    if (differenceInMinutes(endDate, startDate) > 0){
        validDate = true;
    } else {
        setFormError("Invalid Time");
    }
    return validDate;
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      let isValid = handleValidation()
      if (isValid) {
          setUsers([]);
        fetch(formData); // API call
        setFormError(null);
      }
  }
    return (
      <>
        <form onSubmit={handleSubmit} className="mt-4 px-4">
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
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat=" d MMMM, yyyy h:mm aa"
                          className="w-full p-2 block  border border-grey-light mt-5"
                      />
                  </div>
              </div>
              <div className="flex flex-col py-2 col-span-3 text-xl">
                  <label>
                  OpenStreetMap Users to Track:
                  </label>
                  <textarea
                      name="usernames"
                      rows="7"
                      placeholder={"username-1, username-2,...upto 50 usernames"}
                      value={formData.usernames}
                      onChange={handleChange}
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
                      onChange={handleChange}
                      className="mt-5 blue-grey w-100 py-3 px-2 border border-grey-light bg-transparent focus:outline-none resize-none"
                  />
              </div>
          </div>
          <div className="text-center mt-4">
              <SubmitButton styles="bg-red text-white py-3 px-10 text-xl">
                  Submit Your Query
              </SubmitButton>
          </div>
        </form>
        {formError && <Error error={formError} />}
      </>
    )
};
