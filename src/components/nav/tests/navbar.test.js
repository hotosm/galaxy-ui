import React from 'react';
import { AppProviders, render, cleanup } from '../../../utils/testUtils';
import { NavBar } from '../navbar';

afterEach(cleanup);

it('NavBar component', () => {
  const { getAllByRole } = render(
    <AppProviders>
      <NavBar />
    </AppProviders>
  );
  const heading = getAllByRole('heading');
  expect(heading.length).toBe(1);
  expect(heading[0].innerHTML).toBe("OSM Galaxy");
  const logo = getAllByRole('img');
  expect(logo.length).toBe(1);
  expect(logo[0].alt).toBe('HOT-logo');
  expect(logo[0].src).toContain('hot-logo.svg');
  
  const links = getAllByRole('link');
  expect(links.length).toBe(3);
  expect(links[0].href).toContain('/');
  expect(links[1].href).toContain('/explore');
  expect(links[1].innerHTML).toBe('Explore Data');
  expect(links[2].href).toContain('/about');
  expect(links[2].innerHTML).toContain('About');
});
