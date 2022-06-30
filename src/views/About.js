import React from "react";
import { FormattedMessage } from "react-intl";
import { Footer } from "../components/footer";
import messages from "./messages";

export function About() {
  return (
    <div className="flex flex-col h-screen ">
      <main className="w-screen  mb-20 pt-4 mt-4 space-y-9 flex flex-col">
        <section className=" w-10/12 flex items-center mx-auto md:h-1/4  ">
          <p className="text-center text-xl">
            <FormattedMessage
              {...messages.projectOverview}
              values={{
                OSMLink: (
                  <a
                    className="text-red"
                    href="https://www.openstreetmap.org/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    OpenStreetMap (OSM)
                  </a>
                ),
              }}
            />
          </p>
        </section>
        <hr className="w-full" />
        <section className=" flex flex-col justify-between md:pl-10 md:pr-10 items-center md:items-start md:flex-row ">
          <div
            className="relative overflow-hidden w-full md:w-1/2"
            style={{
              paddingTop: "56.25%",
              height: 0,
            }}
          >
            <iframe
              title="OSM Galaxy Slides"
              src="https://docs.google.com/presentation/d/10MWGS3Uf3TL_iwrbjjFh1GJBloXlESxx9G4IH1NqJmo/embed?start=false&loop=false&delayms=3000#slide=8"
              allowFullScreen
              className="absolute top-0 bottom-0 left-0 right-0 w-full h-full md:h-1/2"
              data-testid="slides-element"
            ></iframe>
          </div>
          <div className="  md:w-4/12">
            <h5 className="text-center text-xl font-semibold p-0 mb-1">
              <FormattedMessage {...messages.resourcesHeading} />:
            </h5>
            <div className="pt-3">
              <ul className="w-full text-center text-xl">
                <li className="document-link">
                  <a
                    href="https://docs.google.com/presentation/d/10MWGS3Uf3TL_iwrbjjFh1GJBloXlESxx9G4IH1NqJmo/edit#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage {...messages.galaxySlideDeck} />
                  </a>
                </li>
                <li className="document-link">
                  <a
                    href="https://docs.google.com/spreadsheets/d/1zla1U-l-Va6UftZLn-csejBdfUGzOfj5IcREbsx66Hg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage {...messages.galaxyUserStories} />
                  </a>
                </li>
                <li className="document-link">
                  <a
                    href="https://galaxy-api.hotosm.org/docs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage {...messages.galaxyAPIDocs} />
                  </a>
                </li>
                <li className="document-link">
                  <a
                    href="https://hotosm.github.io/underpass/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage {...messages.underpassOverview} />
                  </a>
                </li>
                <li className="document-link">
                  <a
                    href="https://bit.ly/galaxy-wireframes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage {...messages.wireframesAccess} />
                  </a>
                </li>
                <li className="document-link">
                  <a
                    href="https://docs.google.com/document/d/1pry1_5al7PZOFN0awI5Fe_n1m-smb655su1yltkA5a8/edit#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage {...messages.apiRequirements} />
                  </a>
                </li>
                <li className="document-link">
                  <a
                    href="https://docs.google.com/document/d/1M3gaP_vlQzvmVepkc1-xRmvh2Jrsfi8WiFcdFggLLpQ/edit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage {...messages.websiteAcceptanceCriteria} />
                  </a>
                </li>
                <li className="document-link">
                  <a
                    href="https://bit.ly/galaxy-contribution"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage {...messages.workingGroupRegistration} />
                  </a>
                </li>
                <li className="document-link">
                  <a
                    href="https://osm-stats.hotosm.org/data/download/galaxy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage {...messages.osmStatsDownload} />
                  </a>
                </li>
                <li className="document-link">
                  <a href="h#" target="_blank" rel="noreferrer">
                    <FormattedMessage {...messages.galaxyFAQ} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <div className=" bottom-2">
        <Footer />
      </div>
    </div>
  );
}
