import React from "react";
import { Link } from "react-router-dom";
import { Footer } from '../components/footer'

export function About () {
    return (
        <div className="h-screen">
            <main className="w-screen h-5/6 mt-2 mb-5 p-2 space-y-9 flex flex-col">
                <hr className="w-full"/>
                <section className="w-9/12 py-10 mx-auto h-1/4">
                    <p className="text-center">
                        <Link className="text-red" to={{ pathname:"https://www.openstreetmap.org/"}} target="_blank">
                            OpenStreetMap(OSM) &nbsp;
                        </Link>
                        Galaxy is a project that the HOT Tech Team launched this mid-April (14th April, 2021) to optimise and improve availability & accessibility of OSM Data outputs for different user groups within the ecosystem.
                        Through this project we strive to address all the OSM data needs under one umbrella and ensure OSM data is available, accessible and ready to use for all kinds of users.
                        We are trying to solve the high dependency on different data sources and uncontrolled platforms while focusing on fast queries and process optimisation by accessing data from HOT administered and controlled environment.
                    </p>
                </section>
                <hr className="w-full"/>
                <section class="flex space-x-40 justify-center w-full h-3/4">
                    <iframe
                        title="OSM Galaxy Slides"
                        src="https://docs.google.com/presentation/d/e/2PACX-1vSJFMo-0NBaJpWPGPgDcQGIGAz1xivg47J1gV6uIfET0TQdnhYoMpJgpHGSgOf5100aSK00FgL1J2aR/embed?start=false&loop=false&delayms=3000#slide=14"
                        allowfullscreen
                        class="w-4/12 h-full"
                        width="100%" >
                    </iframe>
                    <div class="w-4/12">
                        <h5 class="text-center text-lg font-medium p-0">Get started on this project with these documents:</h5>
                        <div class="pt-3 ">
                            <ul className="w-full text-center">
                                <li className="document-link">
                                    <Link to={{ pathname:"https://docs.google.com/presentation/d/11Ev80L5CSVIDWtf1JJhfRD6rOgcT0tae1C1ksVF892Y/"}} target="_blank">
                                        OSM Galaxy Slide Deck
                                    </Link>
                                </li>
                                <li className="document-link">
                                    <Link to={{ pathname:"https://docs.google.com/spreadsheets/d/1zla1U-l-Va6UftZLn-csejBdfUGzOfj5IcREbsx66Hg"}} target="_blank">
                                        User Stories for Galaxy
                                    </Link>
                                </li>
                                <li className="document-link">
                                    <Link to={{ pathname:"http://osm-stats.hotosm.org/docs"}} target="_blank">
                                        OSM Statistics API Access
                                    </Link>
                                </li>
                                <li className="document-link">
                                    <Link to={{ pathname:"https://hotosm.github.io/underpass/"}} target="_blank">
                                        Underpass Technical Overview
                                    </Link>
                                </li>
                                <li className="document-link">
                                    <Link to={{ pathname:"http://bit.ly/galaxy-contribution"}} target="_blank">
                                        Register your interest for Working Group
                                    </Link>
                                </li>
                                <li className="document-link">
                                    <Link to={{ pathname:"https://osm-stats.hotosm.org/data/download/osmstats"}} target="_blank">
                                        OSM statistics Data Download
                                    </Link>
                                </li>
                                <li className="document-link">
                                    <Link to={{ pathname:"h#"}} target="_blank">
                                        FAQ on Galaxy (To be Updated)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <div className="bg-tan p-2">
                <Footer />
            </div>
        </div>
    )
}
