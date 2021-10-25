
import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import {QueryClientProvider, QueryClient } from 'react-query';
import { MemoryRouter } from "react-router-dom";
import store from '../app/store';

export const IntlProviders = ({ children, props = { locale: 'en' } }) => (
  <IntlProvider {...props}>{children}</IntlProvider>
);


const queryClient = new QueryClient(); 

export const AppProviders = ({
  children,
  props = { locale: 'en' },
  localStore = null || store,}) => (
    <Provider store={localStore}>
      <QueryClientProvider client={queryClient}>
        <IntlProvider {...props}>
          <MemoryRouter>
            {children}
          </MemoryRouter>
        </IntlProvider>
      </QueryClientProvider>
    </Provider>
);

const customRender = (ui, {route = '/'} = {}, options) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, {wrapper: AppProviders, ...options})
}

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
