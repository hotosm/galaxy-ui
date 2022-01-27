import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export const UserGroupErrorMessage = ({error}) => {
  if (error === "Missing field") {
    return (
      <>
        <FormattedMessage
          {...messages.userGroupErrorEmptyField}
          values={{
            users: (
              <span className="text-red">
                <FormattedMessage {...messages.UsersToTrack} />
              </span>
            )
          }}
        />
    </>
    )
  } else {
      return (
        <FormattedMessage
          {...messages.ServerError}
          values={{
            error: (
            <span className="text-red">{error}</span>  
            )
          }}
        />
      )
  }
};
