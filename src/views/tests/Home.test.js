import React from 'react';
import { AppProviders, render, cleanup } from '../../utils/testUtils';
import { Home } from '../Home';

afterEach(cleanup);

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: jest.fn(() => ({})),
}));


test('Home View', () => {
  const { getByText, getByTestId } = render(
    <AppProviders>
      <Home />
    </AppProviders>
  );
  expect(getByText(/Access All OSM Data Outputs in One Portal/i)).toBeInTheDocument();
  expect(getByText(/Galaxy is a work in progress project focused on bringing together all of the OSM data outputs/i)).toBeInTheDocument();
  expect(getByText('Start Exploring Data')).toBeInTheDocument();
  expect(getByTestId('map-element')).toBeInTheDocument();
});
