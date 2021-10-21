import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Footer } from '../components/footer';
import messages from "./messages";

export function About() {
    return (
        <div className="h-screen">
            <hr className="w-full"/>
            <main className="w-screen h-5/6 mt-1 mb-5 p-2 space-y-9 flex flex-col">
                <section className="w-10/12 flex items-center mx-auto h-1/4">
                    <p className="text-center text-xl">
                        <Link className="text-red" to={{ pathname:"https://www.openstreetmap.org/"}} target="_blank">
                            OpenStreetMap (OSM) &nbsp;
                        </Link>
                        <FormattedMessage {...messages.projectOverview} />
                    </p>
                </section>
                <hr className="w-full"/>
                <section className="flex space-x-40 justify-center w-full h-3/4">
                    <iframe
                        title="OSM Galaxy Slides"
                        src="https://docs.google.com/presentation/d/e/2PACX-1vSJFMo-0NBaJpWPGPgDcQGIGAz1xivg47J1gV6uIfET0TQdnhYoMpJgpHGSgOf5100aSK00FgL1J2aR/embed?start=false&loop=false&delayms=3000#slide=14"
                        allowFullScreen
                        className="w-4/12 h-full"
                        width="100%" >
                    </iframe>
                    <div className="w-4/12">
                        <h5 className="text-center text-xl font-semibold p-0 mb-1">
                            <FormattedMessage {...messages.resourcesHeading} />:
                        </h5>
                        <div className="pt-3">
                            <ul className="w-full text-center text-xl">
                                <li className="document-link">
                                    <Link to={{ pathname:"https://docs.google.com/presentation/d/11Ev80L5CSVIDWtf1JJhfRD6rOgcT0tae1C1ksVF892Y/"}} target="_blank">
                                        <FormattedMessage {...messages.galaxySlideDeck} />
                                    </Link>
                                </li>
                                <li className="document-link">
                                    <Link to={{ pathname:"https://docs.google.com/spreadsheets/d/1zla1U-l-Va6UftZLn-csejBdfUGzOfj5IcREbsx66Hg"}} target="_blank">
                                        <FormattedMessage {...messages.galaxyUserStories} />
                                    </Link>
                                </li>
                                <li className="document-link">
                                    <Link to={{ pathname:"http://osm-stats.hotosm.org/docs"}} target="_blank">
                                        <FormattedMessage {...messages.osmStatsDoc} />
                                    </Link>
                                </li>
                                <li className="document-link">
                                    <Link to={{ pathname:"https://hotosm.github.io/underpass/"}} target="_blank">
                                        <FormattedMessage {...messages.underpassOverview} />
                                    </Link>
                                </li>
                                <li className="document-link">
                                    <Link to={{ pathname:"http://bit.ly/galaxy-contribution"}} target="_blank">
                                        <FormattedMessage {...messages.workingGroupRegistration} />
                                    </Link>
                                </li>
                                <li className="document-link">
                                    <Link to={{ pathname:"https://osm-stats.hotosm.org/data/download/osmstats"}} target="_blank">
                                        <FormattedMessage {...messages.osmStatsDownload} />
                                    </Link>
                                </li>
                                <li className="document-link">
                                    <Link to={{ pathname:"h#"}} target="_blank">
                                        <FormattedMessage {...messages.galaxyFAQ} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <div className="p-2">
                <Footer />
            </div>
        </div>
    )
}
