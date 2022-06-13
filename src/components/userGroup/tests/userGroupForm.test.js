import React from "react";
import { render, cleanup } from "@testing-library/react";
import { addDays, format } from "date-fns";
import { AppProviders } from "../../../utils/testUtils";
import { UserGroupReportForm } from "../userGroupForm";

describe("User Group Report Form Component", () => {
  const userGroupFormData = {
    startDate: addDays(new Date(), -29),
    endDate: new Date(),
    TMProjectIds: "",
    mapathonHashtags: "",
    usernames: "",
  };
  const setUserGroupFormData = jest.fn();
  const formError = null;
  const setFormError = jest.fn();

  afterEach(cleanup);

  it("renders new form", () => {
    const { getByText, getAllByRole, getByPlaceholderText } = render(
      <AppProviders>
        <UserGroupReportForm
          formData={userGroupFormData}
          setFormData={setUserGroupFormData}
          formError={formError}
          setFormError={setFormError}
        />
      </AppProviders>
    );

    // form input titles
    expect(getByText(/Start Date/i)).toBeInTheDocument();
    expect(getByText(/End Date/i)).toBeInTheDocument();
    expect(getByText(/OpenStreetMap Users to Track/i)).toBeInTheDocument();
    expect(getByText(/Mapathon Hashtags/i)).toBeInTheDocument();

    // form input contents
    const inputs = getAllByRole("textbox");
    expect(inputs.length).toBe(4);
    expect(inputs[0].value).toContain(
      format(addDays(new Date(), -29), "d MMMM, yyyy h:mm aa")
    ); //start date datepicker
    expect(inputs[1].value).toContain(
      format(new Date(), "d MMMM, yyyy h:mm aa")
    ); //end date datepicker

    //OSM usernames textarea
    expect(inputs[2].type).toBe("textarea");
    expect(
      getByPlaceholderText(/username-1, username-2, ... upto 50 usernames/i)
    ).toBeInTheDocument();

    //Mapathon Hashtags textarea
    expect(inputs[3].type).toBe("textarea");
    expect(
      getByPlaceholderText(/Enter the hashtags separated by commas/i)
    ).toBeInTheDocument();
    expect(
      getByPlaceholderText(/Enter the hashtags separated by commas/i).name
    ).toBe("mapathonHashtags");
    // Submit button
    expect(getByText(/submit your query/i)).toBeInTheDocument();
  });
});
