import React from 'react';
import { render, cleanup } from '@testing-library/react'
import { IntlProviders } from '../../utils/testUtils';
import { Footer } from '../footer';

afterEach(cleanup);

it('Footer component', () => {
  const { getByText, debug} = render(
    <IntlProviders>
      <Footer />
    </IntlProviders>
  );
  expect(getByText(/this project is under development by/i)).toBeInTheDocument();
  const orgLink = getByText(/Humanitarian OpenStreetMap Team/i);
  expect(orgLink.closest('a').href).toBe('https://www.hotosm.org/');
  expect(getByText(/reach out on/i)).toBeInTheDocument();
  const GithubLink = getByText(/Github/i);
  expect(GithubLink.closest('a').href).toBe('https://github.com/hotosm');
  const SlackLink = getByText(/Slack/i);
  expect(SlackLink.closest('a').href).toBe('http://slack.hotosm.org/');
});
