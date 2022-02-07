import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import { getTime } from "date-fns";
import { FormattedMessage, useIntl } from "react-intl";
import "react-datepicker/dist/react-datepicker.css";
import { SubmitButton } from "../button";
import { Error } from "../formResponses";
import { UserGroupErrorMessage } from "./userGroupError";
import messages from "./messages";

export const UserGroupReportForm = ({
  fetch,
  formData,
  setFormData,
  setUsers,
  formError,
  setFormError,
}) => {
  const intl = useIntl();

  useEffect(() => {
    setFormError(null);
  }, [formData, setFormError]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.usernames.length > 0) {
      setUsers([]);
      fetch(formData); // API call
      setFormError(null);
    } else {
      setFormError("Missing field");
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
                <FormattedMessage {...messages.StartDate} />:
              </label>
              <DatePicker
                selected={formData.startDate}
                onChange={(date) => {
                  setFormData({
                    ...formData,
                    startDate: date,
                  });
                }}
                showTimeSelect
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="d MMMM, yyyy h:mm aa"
                className="w-full p-2 block border border-grey-light mt-5"
              />
            </div>
            <div className="text-xl">
              <label>
                <span className="text-red">* </span>
                <FormattedMessage {...messages.EndDate} />:
              </label>
              <DatePicker
                selected={formData.endDate}
                onChange={(date) => {
                  setFormData({
                    ...formData,
                    endDate: date,
                  });
                }}
                minDate={formData.startDate}
                filterTime={(time) =>
                  getTime(formData.startDate) < getTime(time)
                }
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
              <span className="text-red">* </span>
              <FormattedMessage {...messages.UsersToTrack} />:
            </label>
            <textarea
              name="usernames"
              rows="7"
              placeholder={intl.formatMessage(messages.UsernamesPlaceholder)}
              value={formData.usernames}
              onChange={handleChange}
              className="mt-5 blue-grey w-100 py-3 px-2 border border-grey-light bg-transparent focus:outline-none resize-none"
            />
          </div>
          <div className="flex flex-col py-2 col-span-3 text-xl">
            <label>
              <FormattedMessage {...messages.Hashtags} />:
            </label>
            <textarea
              name="mapathonHashtags"
              rows="7"
              placeholder={intl.formatMessage(messages.HashtagsPlaceholder)}
              value={formData.mapathonHashtags}
              onChange={handleChange}
              className="mt-5 blue-grey w-100 py-3 px-2 border border-grey-light bg-transparent focus:outline-none resize-none"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <SubmitButton styles="bg-red text-white py-3 px-10 text-xl">
            <FormattedMessage {...messages.Submit} />
          </SubmitButton>
        </div>
      </form>
      {formError && (
        <Error>
          <UserGroupErrorMessage error={formError} />
        </Error>
      )}
    </>
  );
};
