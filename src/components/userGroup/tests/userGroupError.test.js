import React from "react";
import { render } from "@testing-library/react";
import { AppProviders } from "../../../utils/testUtils";
import { UserGroupErrorMessage } from "../userGroupError";

describe("User Group Error Message Component", () => {
  it("displays server message", () => {
    const { getByText } = render(
      <AppProviders>
        <UserGroupErrorMessage error={"Internal Server Error"} />
      </AppProviders>
    );
    expect(
      getByText(/There was a problem with the server/)
    ).toBeInTheDocument();
    expect(getByText(/Internal Server Error/)).toBeInTheDocument();
    expect(getByText(/while executing this query/)).toBeInTheDocument();
    expect(getByText(/Please try again later/)).toBeInTheDocument();
  });

  it("displays server error for time range exceeding given interval", () => {
    const { getByText, queryByText } = render(
      <AppProviders>
        <UserGroupErrorMessage
          error={"Time interval should not exceed 30 days"}
        />
      </AppProviders>
    );
    expect(
      getByText(/There was a problem with the server /)
    ).toBeInTheDocument();
    expect(
      getByText("Time interval should not exceed 30 days")
    ).toBeInTheDocument();
    expect(
      queryByText(/ while executing this query. Please try again later/)
    ).toBeInTheDocument();
  });

  it("displays error if usernames field has not been filled", () => {
    const { getByText, queryByText } = render(
      <AppProviders>
        <UserGroupErrorMessage error={"Missing field"} />
      </AppProviders>
    );
    expect(getByText(/Please fill in the/)).toBeInTheDocument();
    expect(getByText(/OpenStreetMap Users to Track/)).toBeInTheDocument();
    expect(getByText(/to continue/)).toBeInTheDocument();
    expect(
      queryByText(/There was a problem with the server/)
    ).not.toBeInTheDocument();
  });
});
