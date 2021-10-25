import React from 'react';
import { 
  AppProviders,
  cleanup,
  render,
 } from '../../utils/testUtils';
import { Banner } from '../banner';

afterEach(cleanup);

it('Banner component', () => {
  // global.URL.createObjectURL = jest.fn();
  const {getByText} = render(
    <AppProviders>
      <Banner />
    </AppProviders>
  );
  expect(getByText(/Access All OSM Data Outputs in One Portal/i)).toBeInTheDocument();
  expect(getByText(/Galaxy is a work in progress project focused on bringing together all of the OSM data outputs/i)).toBeInTheDocument();
  expect(getByText('Start Exploring Data')).toBeInTheDocument();
  // todo: test routing functionality
});
