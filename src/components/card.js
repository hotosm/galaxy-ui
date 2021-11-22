import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

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
    )
};
