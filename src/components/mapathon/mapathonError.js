import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "../messages";

export const MapathonErrorMessage = ({ error }) => {
  if (error === "Missing fields") {
    return (
      <>
        <FormattedMessage
          {...messages.mapathonSummaryErrorEmptyFields}
          values={{
            b: (chunks) => <b>{chunks}</b>,
          }}
        />
        <li>
          <FormattedMessage {...messages.mapathonSummaryFormProjectIds} />
        </li>
        <li>
          <FormattedMessage {...messages.mapathonSummaryFormHashtags} />
        </li>
      </>
    );
  } else if (error === "Invalid IDs") {
    return (
      <p>
        <FormattedMessage {...messages.mapathonSummaryErrorInvalidIds} />
      </p>
    );
  } else if (error === "Invalid Time") {
    return (
      <p>
        <FormattedMessage {...messages.mapathonSummaryErrorInvalidTime} />
      </p>
    );
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
