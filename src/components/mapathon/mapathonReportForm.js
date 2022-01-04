import React, { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import { FormattedMessage, useIntl } from "react-intl";
import "react-datepicker/dist/react-datepicker.css";
import { SubmitButton } from "../button";
import { Error } from "../formResponses";
import { MapathonErrorMessage } from "./mapathonError";
import messages from "../messages";
import { validateMapathonFormData } from '../../utils/validationUtils';
import { MapathonContext } from "../../context/mapathonContext";

export const MapathonReportForm = ({ fetch, error }) => {
  const intl = useIntl();

const { formData, setFormData } = useContext(MapathonContext)

  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (error) setFormError(error);
    else setFormError(null);
  }, [formData, error]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
        let isValid = validateMapathonFormData(formData)
        if (isValid) {
            fetch(formData); // API call
            setFormError(null);
        }
    } catch (e) {
      setFormError(e.message);
    }
  };

    return (
      <>
        <form onSubmit={handleSubmit} className="mt-4 px-4">
          <div className="grid grid-cols-8 gap-4">
              <div className="space-y-20 py-2 col-span-2">
                  <div className="text-xl">
                      <label>
                          <span className="text-red">* </span>
                          <FormattedMessage {...messages.mapathonFormStartDate}/>:
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
                          <FormattedMessage {...messages.mapathonFormEndDate}/>:
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
                          className="w-full p-2 block border border-grey-light mt-5"
                      />
                  </div>
              </div>
              <div className="flex flex-col py-2 col-span-3 text-xl">
                  <label>
                  <FormattedMessage {...messages.mapathonFormProjectIds}/>:
                  </label>
                  <textarea
                      name="TMProjectIds"
                      rows="7"
                      placeholder={intl.formatMessage(messages.mapathonFormIdsPlaceholder)}
                      value={formData.TMProjectIds}
                      onChange={handleChange}
                      className="mt-5 blue-grey w-100 py-3 px-2 border border-grey-light bg-transparent focus:outline-none resize-none"
                  /> 
              </div>
              <div className="flex flex-col py-2 col-span-3 text-xl">
                  <label>
                      <FormattedMessage {...messages.mapathonFormHashtags}/>:
                  </label>
                  <textarea
                      name="mapathonHashtags"
                      rows="7"
                      placeholder={intl.formatMessage(messages.mapathonFormHashtagsPlaceholder)}
                      value={formData.mapathonHashtags}
                      onChange={handleChange}
                      className="mt-5 blue-grey w-100 py-3 px-2 border border-grey-light bg-transparent focus:outline-none resize-none"
                  />
              </div>
          </div>
          <div className="text-center mt-4">
              <SubmitButton styles="bg-red text-white py-3 px-10 text-xl">
                  <FormattedMessage {...messages.mapathonSubmitForm}/>
              </SubmitButton>
          </div>
        </form>
        {formError && (
        <Error>
          <MapathonErrorMessage error={formError} />
        </Error>
      )}
    </>
  );
};
