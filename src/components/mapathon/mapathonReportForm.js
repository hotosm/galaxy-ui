import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { getTime, setHours, setMinutes, setSeconds } from "date-fns";
import { FormattedMessage, useIntl } from "react-intl";
import "react-datepicker/dist/react-datepicker.css";
import { SubmitButton } from "../button";
import { SwitchToggle } from "../toggle";
import { Error } from "../formResponses";
import { MapathonErrorMessage } from "./mapathonError";
import { setLoading, setTriggerSubmit } from "../../features/form/formSlice";
import { FormContext } from "../../context/formContext";
import { getTimeZone } from "../../utils/timeUtils";
import { validateMapathonFormData } from "../../utils/validationUtils";
import messages from "../messages";

export const MapathonReportForm = ({ fetch, error, loading }) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const { mapathonFormData, setMapathonFormData } = useContext(FormContext);
  const [formError, setFormError] = useState(null);
  const triggerSubmit = useSelector((state) => state.mapathon.triggerSubmit);
  const [today, setToday] = useState(false);

  useEffect(() => {
    if (error) setFormError(error);
    else setFormError(null);
  }, [mapathonFormData, error]);

  useEffect(() => {
    if (today) {
      let startDate = setHours(setMinutes(setSeconds(new Date(), 0), 0), 0);
      let endDate = setHours(setMinutes(setSeconds(new Date(), 59), 59), 23);
      setMapathonFormData({
        ...mapathonFormData,
        startDate,
        endDate,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [today]);

  const fetchData = () => {
    try {
      let isValid = validateMapathonFormData(mapathonFormData);
      if (!isValid) return;
      else {
        fetch(mapathonFormData); // API call
        setFormError(null);
      }
    } catch (e) {
      setFormError(e.message);
    }
  };

  const handleChange = (e) => {
    setMapathonFormData({
      ...mapathonFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!triggerSubmit) {
      dispatch(setLoading(false));
      return;
    } else {
      fetchData();
      dispatch(setTriggerSubmit(false));
      dispatch(setLoading(true));
    }
  }, [triggerSubmit]);

  return (
    <>
      <SwitchToggle
        label="Today"
        isChecked={today}
        handleChange={() => setToday(!today)}
      />
      <form onSubmit={handleSubmit} className="mt-4 px-4">
        <div className="grid grid-cols-8 gap-4">
          <div className="space-y-20 py-2 col-span-2">
            <div className="text-xl">
              <label>
                <span className="text-red">* </span>
                <FormattedMessage {...messages.mapathonFormStartDate} />:
                <span className="text-lg">
                  &nbsp;({getTimeZone(new Date())})
                </span>
              </label>
              <DatePicker
                selected={mapathonFormData.startDate}
                onChange={(date) => {
                  setMapathonFormData({
                    ...mapathonFormData,
                    startDate: date,
                  });
                }}
                showTimeSelect
                readOnly={today}
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="d MMMM, yyyy h:mm aa"
                className="w-full p-2 block  border border-grey-light mt-5"
              />
            </div>
            <div className="text-xl">
              <label>
                <span className="text-red">* </span>
                <FormattedMessage {...messages.mapathonFormEndDate} />:
                <span className="text-lg">
                  &nbsp;({getTimeZone(new Date())})
                </span>
              </label>
              <DatePicker
                selected={mapathonFormData.endDate}
                onChange={(date) => {
                  setMapathonFormData({
                    ...mapathonFormData,
                    endDate: date,
                  });
                }}
                minDate={mapathonFormData.startDate}
                filterTime={(time) =>
                  getTime(mapathonFormData.startDate) < getTime(time)
                }
                showTimeSelect
                readOnly={today}
                timeIntervals={15}
                timeCaption="Time"
                dateFormat=" d MMMM, yyyy h:mm aa"
                className="w-full p-2 block border border-grey-light mt-5"
              />
            </div>
          </div>
          <div className="flex flex-col py-2 col-span-3 text-xl">
            <label>
              <FormattedMessage {...messages.mapathonFormProjectIds} />:
            </label>
            <textarea
              name="TMProjectIds"
              rows="7"
              placeholder={intl.formatMessage(
                messages.mapathonFormIdsPlaceholder
              )}
              value={mapathonFormData.TMProjectIds}
              onChange={handleChange}
              className="mt-5 blue-grey w-100 py-3 px-2 border border-grey-light bg-transparent focus:outline-none resize-none"
            />
          </div>
          <div className="flex flex-col py-2 col-span-3 text-xl">
            <label>
              <FormattedMessage {...messages.mapathonFormHashtags} />:
            </label>
            <textarea
              name="mapathonHashtags"
              rows="7"
              placeholder={intl.formatMessage(
                messages.mapathonFormHashtagsPlaceholder
              )}
              value={mapathonFormData.mapathonHashtags}
              onChange={handleChange}
              className="mt-5 blue-grey w-100 py-3 px-2 border border-grey-light bg-transparent focus:outline-none resize-none"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <SubmitButton
            styles="bg-red text-white py-3 px-10 text-xl"
            disabled={loading}
          >
            <FormattedMessage {...messages.mapathonSubmitForm} />
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
