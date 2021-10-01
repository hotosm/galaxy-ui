import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import App from './App';

export const IntlProviders = ({ children, props = { locale: 'en' } }: Object) => (
  <IntlProvider {...props}>{children}</IntlProvider>
);

test('renders cleanup react app message', () => {
  const { getByText } = render(
    <IntlProviders><App /></IntlProviders>
  );
  const title = getByText(/OSM Galaxy/i);
  expect(title).toBeInTheDocument();
});
