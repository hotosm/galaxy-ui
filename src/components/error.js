import React from "react";
import { FormattedMessage } from "react-intl";
import { Button } from "./button";
import messages from "./messages";

export const FallbackComponent = ({ error }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" mx-auto">
        <div className="text-xl w-full text-center" title="error" role="img">
          <FormattedMessage {...messages.fallbackError} />
          {"!"}
        </div>
        <div className="p-3 text-center">
          <p className="text-lg text-red">&#123; {error.message} &#125;</p>
        </div>
        <div className="py-2 text-lg text-center">
          <a
            className="bg-red text-white py-2 px-4 mx-2"
            href="https://github.com/hotosm/galaxy-ui/issues"
            target="_blank"
            rel="noreferrer"
          >
            <FormattedMessage {...messages.reportIssue} />
          </a>
          <Button
            onClick={handleClick}
            styles={"text-red bg-white border border-tan py-1 px-7 mx-2"}
          >
            <FormattedMessage {...messages.tryAgain} />
          </Button>
        </div>
      </div>
    </div>
  );
};
