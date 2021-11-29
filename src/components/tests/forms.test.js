import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { addHours, format } from "date-fns";
import { IntlProviders } from '../../utils/testUtils';
import { ReportForm } from '../forms';

afterEach(cleanup);

it('Mapathon Report Form Component', async () => {
  const fakeData = {
    startDate: addHours(new Date(), -1),
    endDate: new Date(),
    TMProjectIds: "",
    mapathonHashtags: ""
  }
  const handleTestSubmit = jest.fn().mockImplementation((e) => e.preventDefault());

  const { getByText, getByRole, getAllByRole, debug, getByPlaceholderText} = render(
    <IntlProviders>
      <ReportForm 
         formData={fakeData}
         setFormData={jest.fn()}
         onSubmit={handleTestSubmit}
         onChange={jest.fn()}
      />
    </IntlProviders>
  );
  // form input titles
  expect(getByText(/Start Date/i)).toBeInTheDocument();
  expect(getByText(/End Date/i)).toBeInTheDocument();
  expect(getByText(/Tasking Manager Project IDs/i)).toBeInTheDocument();
  expect(getByText(/Mapathon Hashtags/i)).toBeInTheDocument();

  // form input contents
  const inputs = getAllByRole('textbox');
  expect(inputs.length).toBe(4);
  expect(inputs[0].value).toContain(format(addHours(new Date(), -1), "d MMMM, yyyy h:mm aa")); //start date datepicker
  expect(inputs[1].value).toContain(format(new Date(), "d MMMM, yyyy h:mm aa")); //end date datepicker
  //TM Project IDs textarea 
  expect(inputs[2].type).toBe('textarea') 
  expect(getByPlaceholderText(/Enter the Tasking Manager Project IDs separated by commas/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/Enter the Tasking Manager Project IDs separated by commas/i).name).toBe('TMProjectIds');
  //Mapathon Hashtags textarea 
  expect(inputs[3].type).toBe('textarea') 
  expect(getByPlaceholderText(/Enter the hashtags separated by commas/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/Enter the hashtags separated by commas/i).name).toBe('mapathonHashtags');
  
  const button = getByRole('button');
  expect(button.innerHTML).toBe('Submit Your Query');
  fireEvent.click(button);
  await waitFor(() => expect(handleTestSubmit).toHaveBeenCalledTimes(1))
});
