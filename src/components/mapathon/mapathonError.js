import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "../messages";

export const MapathonErrorMessage = ({ error }) => {
  if (error === "Missing fields") {
      return (
          <>
          <FormattedMessage
              {...messages.mapathonFormErrorEmptyFields}
              values={{
                  b: chunks => <b>{chunks}</b>
              }}
          />
          <li>
              <FormattedMessage {...messages.mapathonFormProjectIds} />
          </li>
          <li>
          <FormattedMessage {...messages.mapathonFormHashtags} />
          </li>  
      </>
      )
  } else if(error === 'Invalid IDs') {
      return (
          <p>
              <FormattedMessage {...messages.mapathonFormErrorInvalidIds}/>
          </p>
      )
  } else if (error === 'Invalid Time') {
      return (
          <p>
              <FormattedMessage {...messages.mapathonFormErrorInvalidTime}/>
          </p>
      )
  } else {
      return (
      <FormattedMessage
        {...messages.ServerError}
        values={{
          error: <span className="text-red">{error}</span>,
        }}
      />
    );
  }
};
