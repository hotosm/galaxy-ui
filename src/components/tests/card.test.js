import React from 'react';
import { AppProviders, render, cleanup } from '../../utils/testUtils';
import { Card } from '../card';
import messages from '../../views/messages'

afterEach(cleanup);

it('Card component', () => {
  const { getByText } = render(
    <AppProviders>
      <Card
        label={messages.mapathonReport}
        summary={messages.mapathonReportBlurb}
        route={"/card-route"}
      />
    </AppProviders>
  );
  expect(getByText(/Mapathon Reports/i)).toBeInTheDocument();
  expect(getByText(/Mapathon Reports/i).closest('a').href).toContain('/card-route');
  expect(getByText(/Get to know the impact created through a mapathon/i)).toBeInTheDocument();
});
