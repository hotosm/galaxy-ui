import React from "react";
import { render } from "@testing-library/react";
import { AppProviders } from "../../../utils/testUtils";
import { MapathonErrorMessage } from "../mapathonError";

describe("Mapathon Error Message Component", () => {
  it("displays server message", () => {
    const { getByText } = render(
      <AppProviders>
        <MapathonErrorMessage error={"Internal Server Error"} />
      </AppProviders>
    );
    expect(
      getByText(/There was a problem with the server/)
    ).toBeInTheDocument();
    expect(getByText(/Internal Server Error/)).toBeInTheDocument();
    expect(getByText(/while executing this query/)).toBeInTheDocument();
    expect(getByText(/Please try again later/)).toBeInTheDocument();
  });

  it("displays error if time range exceeds 24 hour interval for mapathon form", () => {
    const { getByText, queryByText } = render(
      <AppProviders>
        <MapathonErrorMessage error={"Invalid Time"} />
      </AppProviders>
    );
    expect(
      getByText(/Time difference should be less than or equal to 24 hours/)
    ).toBeInTheDocument();
    expect(
      queryByText(/There was a problem with the server/)
    ).not.toBeInTheDocument();
  });

  it("displays error if IDs entered are not valid", () => {
    const { getByText, queryByText } = render(
      <AppProviders>
        <MapathonErrorMessage error={"Invalid IDs"} />
      </AppProviders>
    );
    expect(
      getByText(/Please input numerical values for the TM Project IDs/)
    ).toBeInTheDocument();
    expect(
      queryByText(/There was a problem with the server/)
    ).not.toBeInTheDocument();
  });

  it("displays error if one of the required fields have not been populated", () => {
    const { getByText, queryByText } = render(
      <AppProviders>
        <MapathonErrorMessage error={"Missing fields"} />
      </AppProviders>
    );
    expect(getByText(/Please fill in/)).toBeInTheDocument();
    expect(getByText(/one/)).toBeInTheDocument();
    expect(getByText(/of the following to continue/)).toBeInTheDocument();
    expect(getByText(/Tasking Manager Project IDs/)).toBeInTheDocument();
    expect(getByText(/Mapathon Hashtags/)).toBeInTheDocument();
    expect(
      queryByText(/There was a problem with the server/)
    ).not.toBeInTheDocument();
  });
});
