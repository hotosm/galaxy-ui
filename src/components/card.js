import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { InfoIcon } from "../assets/svgIcons/info";

export function Card({ label, summary, route }) {
  return (
    <div className={`overflow-hidden px-4`}>
      <Link to={route} className="hover:underline">
        <p className="font-bold text-2xl">
          <FormattedMessage {...label} />
        </p>
        <p className="text-gray-700 text-xl mt-6">
          <FormattedMessage {...summary} />
        </p>
      </Link>
    </div>
  );
}

export const InfoCard = ({ info, styles }) => {
  return (
    <div className={`flex flex-row ${styles}`}>
      <InfoIcon className="w-6 h-6 text-blue-grey" />
      &nbsp;
      <p className="text-base text-blue-grey font-normal">
        Last update: <span className="font-medium">{info}</span>
      </p>
    </div>
  );
};
