import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { differenceInHours, addHours } from "date-fns";
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from "react-intl";
import "react-datepicker/dist/react-datepicker.css";
import { SubmitButton } from "../button";
import { Error } from '../formResponse';
import messages from "../messages";
import { setProjectIds, setHashtags } from "../../features/form/formDataSlice";

export const MapathonReportForm = ({fetch, error}) => {
  const intl = useIntl();
  const dispatch = useDispatch();

    const [formData, setFormData] = useState({
      startDate: addHours(new Date(), -1),
      endDate: new Date(),
      TMProjectIds: useSelector((state) => state.form.projectIds),
      mapathonHashtags: useSelector((state) => state.form.hashtags)
    });

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

  const handleSubmit = (event) => {
      event.preventDefault();
      let isValid = handleValidation()
      if (isValid) {
        dispatch(setProjectIds(formData.TMProjectIds))
        dispatch(setHashtags(formData.mapathonHashtags))
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
