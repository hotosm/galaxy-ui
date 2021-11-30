import React from 'react';
import { AppProviders, render, cleanup } from '../../utils/testUtils';
import { About } from '../About';

afterEach(cleanup);

test('About View', () => {
  const { getByText, getByRole, getByTestId } = render(
    <AppProviders>
      <About />
    </AppProviders>
  );
  // project synopsis
  expect(getByRole('link', { name: "OpenStreetMap (OSM)"})).toBeInTheDocument();
  expect(getByRole('link', { name: "OpenStreetMap (OSM)"}).href).toBe('https://www.openstreetmap.org/');
  expect(getByText(/Galaxy is a project that the HOT Tech Team/i)).toBeInTheDocument();

  // slides iframe
  expect(getByTestId('slides-element')).toBeInTheDocument();
  expect(getByTestId('slides-element').title).toBe('OSM Galaxy Slides');

  // links to resources
  expect(getByText(/Get started on this project with these documents/i)).toBeInTheDocument();
  expect(getByRole('link', { name: "OSM Galaxy Slide Deck"})).toBeInTheDocument();
  expect(getByRole('link', { name: "User Stories for Galaxy"})).toBeInTheDocument();
  expect(getByRole('link', { name: "OSM Statistics API Access"})).toBeInTheDocument();
  expect(getByRole('link', { name: "Underpass Technical Overview"})).toBeInTheDocument();
  expect(getByRole('link', { name: "Website Wireframes on Figma"})).toBeInTheDocument();
  expect(getByRole('link', { name: "API Functional Requirements"})).toBeInTheDocument();
  expect(getByRole('link', { name: "Website Requirements"})).toBeInTheDocument();
  expect(getByRole('link', { name: "Register your interest for Working Group"})).toBeInTheDocument();
  expect(getByRole('link', { name: "OSM statistics Data Download"})).toBeInTheDocument();
  expect(getByRole('link', { name: "FAQ on Galaxy (To be Updated)"})).toBeInTheDocument();

  // footer
  expect(getByText(/This project is under development/i)).toBeInTheDocument();
});
