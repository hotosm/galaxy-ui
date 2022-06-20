import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { FormattedMessage } from "react-intl";
import { Button } from "./button";
import messages from "./messages";

export function Banner() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/explore");
  };

  return (
    <>
      <main className="w-full md:w-3/5  mx-auto my-auto p-4 space-y-14 flex flex-col place-items-center">
        <div className="w-full md:w-1/2 mt-2">
          <h2 className="font-bold text-3xl text-center">
            <FormattedMessage {...messages.galaxyTagline} />
          </h2>
        </div>
        <div className="w-3/4 text-2xl text-center">
          <p>
            <FormattedMessage {...messages.galaxySummary} />
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/7 text-2xl">
          <Button onClick={handleClick} styles={"bg-red text-white py-2 px-4"}>
            <FormattedMessage {...messages.exploreButton} />
          </Button>
        </div>
      </main>
    </>
  );
}

export function TrackingBanner() {
  const [display, setDisplay] = useState("hidden");

  useEffect(() => {
    if (!localStorage.getItem("optout-closed")) {
      setDisplay("grid");
    }
  }, [setDisplay]);

  function closeForm() {
    setDisplay("hidden");
    localStorage.setItem("optout-closed", "true");
  }

  function onAgree() {
    window._paq.push(["rememberConsentGiven"]);
    closeForm();
  }

  function onDisagree() {
    window._paq.push(["forgetConsentGiven"]);
    closeForm();
  }

  const privacyPolicyLink = (
    <a
      href={"https://www.hotosm.org/privacy"}
      className="text-red underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FormattedMessage {...messages.privacyPolicy} />
    </a>
  );

  return (
    <div
      className={`fixed bottom-0 left-0 text-base w-full text-center pl-2 pr-2 pb-2 pt-3 text-white bg-blue-dark z-10 scale-100 ${display}`}
    >
      <div id="optout-contents">
        <p>
          <a
            id="privacyLink"
            className="text-red text-xl font-semibold"
            href={"https://www.hotosm.org/privacy"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage {...messages.aboutInfoCollected} />
          </a>
        </p>
        <p>
          <FormattedMessage
            {...messages.trackingBannerText}
            values={{ link: privacyPolicyLink }}
          />
        </p>
        <div>
          <Button
            onClick={onAgree}
            styles="text-white bg-red pt-2 pb-2 pl-4 pr-4 ml-1 mr-1 rounded-sm inline-block font-semibold"
          >
            <FormattedMessage {...messages.agree} />
          </Button>
          <Button
            onClick={onDisagree}
            styles="text-white bg-red pt-2 pb-2 pl-4 pr-4 ml-1 mr-1 rounded-sm inline-block font-semibold"
          >
            <FormattedMessage {...messages.disagree} />
          </Button>
        </div>
      </div>
    </div>
  );
}
