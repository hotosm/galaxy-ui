import React from 'react';
import { AppProviders, render, cleanup } from '../../../utils/testUtils';
import Header from '../header';

afterEach(cleanup);

it('Header component', () => {
  const { getByText, getByRole, } = render(
    <AppProviders>
      <Header />
    </AppProviders>
  );
  expect(getByText(/mapping our world together/i)).toBeInTheDocument();
  const externalOrgLink = getByRole('link', { name: "www.hotosm.org"});
  expect(externalOrgLink.href).toBe('https://www.hotosm.org/');
  expect(externalOrgLink.target).toBe('_blank');

  expect(getByText(/OSM Galaxy/i)).toBeInTheDocument();
  expect(getByText(/Explore Data/i)).toBeInTheDocument();
  expect(getByText(/About/i)).toBeInTheDocument();
});
