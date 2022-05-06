import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { Button } from "../components/button";
import { DefaultPage } from "./Home";

const NotFoundCard = () => {
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/");
  };
  return (
    <div className="max-w-sm mx-auto bg-white rounded overflow-hidden shadow-lg">
      <div
        className="text-9xl w-full text-red text-center"
        title="404 page not found"
        role="img"
      >
        404
      </div>
      <div className="px-6 py-4 text-center">
        <p className="text-xl">
          <FormattedMessage {...messages.doesNotExist} />
        </p>
        <p className="text-xl">
          <FormattedMessage
            {...messages.exploreMessage}
            values={{
              existing: (
                <span>
                  &nbsp;
                  <Link to={"/explore"} className="text-red">
                    <FormattedMessage {...messages.existingLink} />
                  </Link>
                  &nbsp;
                </span>
              ),
            }}
          />
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <Button
          onClick={handleClick}
          styles={"bg-red text-white py-2 px-4 text-xl"}
        >
          <FormattedMessage {...messages.homeButton} />
        </Button>
      </div>
    </div>
  );
};

export const NotFoundPage = () => {
  return (
    <DefaultPage>
      <NotFoundCard />
    </DefaultPage>
  );
};
