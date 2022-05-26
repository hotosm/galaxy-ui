import React from "react";
import { render, cleanup } from "@testing-library/react";
import { addHours } from "date-fns";
import { AppProviders } from "../../../utils/testUtils";
import {
  FeatureList,
  MapathonDetailedResultsTable,
  MapathonSummaryResults,
} from "../mapathonResults";
import {
  createdFeatures,
  modifiedFeatures,
  mapathonFormDataResponse,
  detailedResponse1,
  detailedResponse2,
} from "./testData";
import { MapathonDetailedTableHeaders } from "../constants";
import { FormContext } from "../../../context/formContext";

function renderMapathonComponent(mapathonFormData, setMapathonFormData, data) {
  return render(
    <AppProviders>
      <FormContext.Provider
        value={{
          mapathonFormData,
          setMapathonFormData,
        }}
      >
        <MapathonDetailedResultsTable
          data={data}
          columns={MapathonDetailedTableHeaders}
        />
      </FormContext.Provider>
    </AppProviders>
  );
}

describe("FeatureList component", () => {
  it("displays title of created features and list of said features", () => {
    const { getByText, getAllByRole } = render(
      <AppProviders>
        <FeatureList title="Features Created" features={createdFeatures} />
      </AppProviders>
    );
    expect(getByText(/Features Created:/i)).toBeInTheDocument();
    // displayed modified features list
    const listItems = getAllByRole("listitem");
    expect(listItems.length).toBe(createdFeatures.length); //1
    expect(getByText(/building: 4189/)).toBeInTheDocument();
  });

  it("displays title of modified features and list of said features", () => {
    const { getByText, getAllByRole } = render(
      <AppProviders>
        <FeatureList title="Features Modified" features={modifiedFeatures} />
      </AppProviders>
    );
    expect(getByText(/Features Modified:/i)).toBeInTheDocument();
    // displayed modified features list
    const listItems = getAllByRole("listitem");
    expect(listItems.length).toBe(modifiedFeatures.length); //17
  });

  it("displays given title and none when no feature list is added", () => {
    const { getByText } = render(
      <AppProviders>
        <FeatureList features={[]} title={"Features created"} />
      </AppProviders>
    );
    expect(getByText(/Features created/)).toBeInTheDocument();
    expect(getByText(/None/)).toBeInTheDocument();
  });
});

describe("Mapathon Summary Results Component", () => {
  it("show features created and modified columns when data is supplied", () => {
    const { getByText } = render(
      <AppProviders>
        <MapathonSummaryResults data={mapathonFormDataResponse} />
      </AppProviders>
    );
    expect(getByText(/Total Unique Contributors/)).toBeInTheDocument();
    expect(getByText(": 4")).toBeInTheDocument(); // number of contributors
    expect(getByText("Features Created:")).toBeInTheDocument();
    expect(getByText("building: 4189")).toBeInTheDocument(); // created
    expect(getByText("Features Modified:")).toBeInTheDocument();
  });

  it("shows none when there are 0 contributors and an empty list of mapped features", () => {
    const { getByText, getAllByText } = render(
      <AppProviders>
        <MapathonSummaryResults
          data={{ totalContributors: 0, mappedFeatures: [] }}
        />
      </AppProviders>
    );
    expect(getByText(/Total Unique Contributors/)).toBeInTheDocument();
    expect(getByText(": 0")).toBeInTheDocument(); // number of contributors
    expect(getByText("Features Created:")).toBeInTheDocument();
    expect(getByText("Features Modified:")).toBeInTheDocument();
    expect(getAllByText("None").length).toBe(2); // created and modified
  });

  it("does not show any features created and modified columns if no data is supplied", () => {
    const { getByText, queryByText, debug } = render(
      <AppProviders>
        <MapathonSummaryResults data={{}} />
      </AppProviders>
    );
    // debug();
    expect(getByText(/Total Unique Contributors/)).toBeInTheDocument();
    expect(queryByText("0")).not.toBeInTheDocument(); // number of contributors
    expect(queryByText(/Features Created/)).not.toBeInTheDocument();
    expect(queryByText(/Features Modified/)).not.toBeInTheDocument();
    expect(queryByText("None")).not.toBeInTheDocument();
  });
});

describe("Mapathon Detailed Results Component", () => {
  const mapathonFormData = {
    startDate: addHours(new Date(), -1),
    endDate: new Date(),
    TMProjectIds: "",
    mapathonHashtags: "",
  };
  const setMapathonFormData = jest.fn();
  afterEach(cleanup);

  it("shows table results when data and headings are supplied", () => {
    const { getByText, queryByText } = renderMapathonComponent(
      mapathonFormData,
      setMapathonFormData,
      detailedResponse1
    );
    expect(getByText("Download CSV")).toBeInTheDocument();
    expect(getByText("Mapper")).toBeInTheDocument();
    expect(getByText("user1")).toBeInTheDocument(); // username
    expect(queryByText(1001)).not.toBeInTheDocument(); //userId does not appear in the document
    expect(getByText("# Buildings Added")).toBeInTheDocument();
    expect(getByText(13)).toBeInTheDocument();
    expect(getByText("# Buildings Modified")).toBeInTheDocument();
    expect(getByText(3)).toBeInTheDocument();
    expect(getByText("# Highways Added")).toBeInTheDocument();
    expect(getByText(0)).toBeInTheDocument();
    expect(getByText("Tasks Mapped")).toBeInTheDocument();
    expect(getByText(2)).toBeInTheDocument();
    expect(getByText("Tasks Validated")).toBeInTheDocument();
    expect(getByText(1)).toBeInTheDocument();
    expect(getByText("Time Spent Mapping (s)")).toBeInTheDocument();
    expect(getByText(1, 200)).toBeInTheDocument();
    expect(getByText("Time Spent Validating (s)")).toBeInTheDocument();
    expect(getByText(30)).toBeInTheDocument();
    expect(getByText("Data Quality Issues")).toBeInTheDocument();
  });

  it("shows N/A for undefined time and task stats", () => {
    const { getByText, getAllByText } = renderMapathonComponent(
      mapathonFormData,
      setMapathonFormData,
      detailedResponse2
    );

    //tasks and time spent - mapping and validating undefined stats
    expect(getByText("Tasks Mapped")).toBeInTheDocument();
    expect(getByText("Tasks Validated")).toBeInTheDocument();
    expect(getByText("Time Spent Mapping (s)")).toBeInTheDocument();
    expect(getByText("Time Spent Validating (s)")).toBeInTheDocument();
    expect(getAllByText("N/A").length).toBe(4);
  });
});
