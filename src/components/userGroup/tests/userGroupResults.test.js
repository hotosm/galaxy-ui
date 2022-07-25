import React from "react";
import { render, cleanup } from "@testing-library/react";
import { addDays } from "date-fns";
import { AppProviders } from "../../../utils/testUtils";
import { UserGroupResultsTable } from "../userGroupResults";
import { UserGroupColumnHeadings } from "../constants";
import { FormContext } from "../../../context/formContext";
import { userGroupTestResults } from "./testData";

function renderUserGroupComponent(data, userDataCheck, loading) {
  const mapathonFormData = {};
  const setMapathonFormData = jest.fn();

  const userGroupFormData = {
    startDate: addDays(new Date(), -29),
    endDate: new Date(),
    TMProjectIds: "",
    mapathonHashtags: "",
    usernames: "",
  };
  const setUserGroupFormData = jest.fn();
  return render(
    <AppProviders>
      <FormContext.Provider
        value={{
          mapathonFormData,
          setMapathonFormData,
          userGroupFormData,
          setUserGroupFormData,
        }}
      >
        <UserGroupResultsTable
          data={data}
          columns={UserGroupColumnHeadings}
          userDataCheck={userDataCheck}
          loading={loading}
        />
      </FormContext.Provider>
    </AppProviders>
  );
}

describe("User Group Results Component", () => {
  afterEach(cleanup);

  it("shows loading rows when loading is true", () => {
    const { container, queryByText } = render(
      <AppProviders>
        <UserGroupResultsTable
          data={[]}
          columns={UserGroupColumnHeadings}
          userDataCheck={true}
          loading={true}
        />
      </AppProviders>
    );
    const loadingRows = container.getElementsByClassName("text-row");
    expect(loadingRows.length).toBe(8); // number of loading rows is 8

    // results table will not show
    expect(queryByText("Download CSV")).not.toBeInTheDocument();
    expect(queryByText("Mapper")).not.toBeInTheDocument();
    expect(queryByText("# Buildings Added")).not.toBeInTheDocument();
    expect(queryByText("# Buildings Modified")).not.toBeInTheDocument();
    expect(queryByText("# Highways Added")).not.toBeInTheDocument();
    expect(queryByText("Tasks Mapped")).not.toBeInTheDocument();
    expect(queryByText("Tasks Validated")).not.toBeInTheDocument();
    expect(queryByText("Time Spent Mapping (s)")).not.toBeInTheDocument();
    expect(queryByText("Time Spent Validating (s)")).not.toBeInTheDocument();
    expect(queryByText("Data Quality Issues")).not.toBeInTheDocument();
    expect(queryByText("No Data Found!")).not.toBeInTheDocument();
  });

  it("shows no data found when user check is false", () => {
    const { getByText, queryByText } = render(
      <AppProviders>
        <UserGroupResultsTable
          data={[]}
          columns={UserGroupColumnHeadings}
          userDataCheck={false}
          loading={false}
        />
      </AppProviders>
    );
    expect(getByText("No Data Found!")).toBeInTheDocument();

    // results table does not show since there is no data
    expect(queryByText("Download CSV")).not.toBeInTheDocument();
    expect(queryByText("Mapper")).not.toBeInTheDocument();
    expect(queryByText("# Buildings Added")).not.toBeInTheDocument();
    expect(queryByText("# Buildings Modified")).not.toBeInTheDocument();
    expect(queryByText("# Highways Added")).not.toBeInTheDocument();
    expect(queryByText("Tasks Mapped")).not.toBeInTheDocument();
    expect(queryByText("Tasks Validated")).not.toBeInTheDocument();
    expect(queryByText("Time Spent Mapping (s)")).not.toBeInTheDocument();
    expect(queryByText("Time Spent Validating (s)")).not.toBeInTheDocument();
    expect(queryByText("Data Quality Issues")).not.toBeInTheDocument();
  });

  it("shows data table when data is provided", () => {
    const { getByText, queryByText, container } = renderUserGroupComponent(
      userGroupTestResults,
      true,
      false
    );

    // table results shown
    expect(getByText("Download CSV")).toBeInTheDocument();
    expect(getByText("Mapper")).toBeInTheDocument();
    expect(getByText("user1")).toBeInTheDocument(); // username
    expect(queryByText(1001)).not.toBeInTheDocument(); //userId does not appear in the document
    expect(getByText("# Buildings Created")).toBeInTheDocument();
    expect(getByText(10281)).toBeInTheDocument();
    expect(getByText("# Buildings Modified")).toBeInTheDocument();
    expect(getByText(8)).toBeInTheDocument();
    expect(getByText("# Highways Created")).toBeInTheDocument();
    expect(getByText(19)).toBeInTheDocument();
    expect(getByText("# Highways Modified")).toBeInTheDocument();
    expect(getByText(50)).toBeInTheDocument();
    expect(getByText("Data Quality Issues")).toBeInTheDocument();
    expect(getByText("End of Table")).toBeInTheDocument();

    // should not show: no data found and loading rows
    expect(queryByText("No Data Found!")).not.toBeInTheDocument();
    expect(container.getElementsByClassName("text-row").length).toBe(0);
  });
});
