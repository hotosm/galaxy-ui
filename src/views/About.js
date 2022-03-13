import React from "react";
import { FormattedMessage } from "react-intl";
import { Footer } from "../components/footer";
import messages from "./messages";

export function About() {
  return (
    <div className="h-screen">
      <main className="w-screen h-5/6 mt-4 mb-5 pt-4 space-y-9 flex flex-col">
        <section className="w-10/12 flex items-center mx-auto h-1/4">
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
        <section className="flex space-x-40 justify-center w-full h-3/4">
          <iframe
            title="OSM Galaxy Slides"
            src="https://docs.google.com/presentation/d/10MWGS3Uf3TL_iwrbjjFh1GJBloXlESxx9G4IH1NqJmo/embed?start=false&loop=false&delayms=3000#slide=8"
            allowFullScreen
            className="w-4/12 h-full"
            width="100%"
            data-testid="slides-element"
          ></iframe>
          <div className="w-4/12">
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
                    href="https://osm-stats.hotosm.org/docs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage {...messages.osmStatsDoc} />
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
      <div className="p-2">
        <Footer />
      </div>
    </div>
  );
}
