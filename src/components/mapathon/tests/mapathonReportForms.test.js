import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { addHours, format } from "date-fns";
import userEvent from "@testing-library/user-event";
import { AppProviders } from "../../../utils/testUtils";
import { MapathonReportForm } from "../mapathonReportForm";

describe("Mapathon Report Form Component", () => {
  afterEach(cleanup);

  it("displays all form components", () => {
    const { getByText, getAllByRole, getByPlaceholderText } = render(
      <AppProviders>
        <MapathonReportForm error={null} fetch={jest.fn()} />
      </AppProviders>
    );
    // form input titles
    expect(getByText(/Start Date/i)).toBeInTheDocument();
    expect(getByText(/End Date/i)).toBeInTheDocument();
    expect(getByText(/Tasking Manager Project IDs/i)).toBeInTheDocument();
    expect(getByText(/Mapathon Hashtags/i)).toBeInTheDocument();

    // form input contents
    const inputs = getAllByRole("textbox");
    expect(inputs.length).toBe(4);
    expect(inputs[0].value).toContain(
      format(addHours(new Date(), -1), "d MMMM, yyyy h:mm aa")
    ); //start date datepicker
    expect(inputs[1].value).toContain(
      format(new Date(), "d MMMM, yyyy h:mm aa")
    ); //end date datepicker
    //TM Project IDs textarea
    expect(inputs[2].type).toBe("textarea");
    expect(
      getByPlaceholderText(
        /Enter the Tasking Manager Project IDs separated by commas/i
      )
    ).toBeInTheDocument();
    expect(
      getByPlaceholderText(
        /Enter the Tasking Manager Project IDs separated by commas/i
      ).name
    ).toBe("TMProjectIds");
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

  it("allows form input changes", async () => {
    const { getByText, getByRole, getAllByRole, debug } = render(
      <AppProviders>
        <MapathonReportForm error={null} fetch={jest.fn()} />
      </AppProviders>
    );

    // form input fields
    const inputs = getAllByRole("textbox");
    let startDate = inputs[0];
    let endDate = inputs[1];
    let projectIds = inputs[2];
    let hashtags = inputs[3];

    // default form values
    expect(startDate.value).toContain(
      format(addHours(new Date(), -1), "d MMMM, yyyy h:mm aa")
    ); //start date datepicker
    expect(endDate.value).toContain(format(new Date(), "d MMMM, yyyy h:mm aa")); //end date datepicker
    expect(projectIds.value).toBe("");
    expect(hashtags.value).toBe("");

    const submitButton = getByRole("button");
    // submit empty values for mapathon hashtags and project Ids
    userEvent.click(submitButton);
    // await waitFor(() => expect(handleTestSubmit).toHaveBeenCalledTimes(0))
    // error
    expect(
      getByText(/It was not possible to run this query/i)
    ).toBeInTheDocument();

    // enter values
    fireEvent.change(projectIds, { target: { value: "111, 1209, 1387" } });
    expect(projectIds.value).not.toBe("");
    expect(projectIds.value).toBe("111, 1209, 1387");
    fireEvent.change(hashtags, { target: { value: "mapchathour" } });
    expect(hashtags.value).not.toBe("");
    expect(hashtags.value).toBe("mapchathour");
    userEvent.click(submitButton);
    // to do: mock api call and test
  });
});
