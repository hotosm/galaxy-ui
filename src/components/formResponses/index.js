import React from "react";
import { FormattedMessage } from "react-intl";
import { BanIcon } from "../../assets/svgIcons";
import messages from "../messages";

export function Error({ children }) {
  return (
    <div className="bg-red-light mt-5 mx-auto w-1/4 text-lg p-4">
      <BanIcon className="w-5 h-5 mr-2 mb-1 inline text-red" />
      <h5 className="font-semibold mb-2 inline">
        <FormattedMessage {...messages.ErrorTitle} />
      </h5>
      <div className="mt-3">{children}</div>
    </div>
  );
}
