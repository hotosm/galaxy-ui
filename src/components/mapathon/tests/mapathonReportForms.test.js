import React from "react";
import { render, cleanup } from "@testing-library/react";
import { addHours, format } from "date-fns";
import { AppProviders } from "../../../utils/testUtils";
import { MapathonReportForm } from "../mapathonReportForm";
import { FormContext } from "../../../context/formContext";

function renderMapathonReportForm(mapathonFormData, setMapathonFormData) {
  return render(
    <AppProviders>
      <FormContext.Provider
        value={{
          mapathonFormData,
          setMapathonFormData,
        }}
      >
        <MapathonReportForm error={null} fetch={jest.fn()} />
      </FormContext.Provider>
    </AppProviders>
  );
}

describe("Mapathon Report Form Component", () => {
  const mapathonFormData = {
    startDate: addHours(new Date(), -1),
    endDate: new Date(),
    TMProjectIds: "",
    mapathonHashtags: "",
  };
  const setMapathonFormData = jest.fn();

  afterEach(cleanup);

  it("displays all form components", () => {
    const { getByText, getAllByRole, getByPlaceholderText } =
      renderMapathonReportForm(mapathonFormData, setMapathonFormData);
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
});
