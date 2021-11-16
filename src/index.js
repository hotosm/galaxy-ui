import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { IntlProvider } from 'react-intl';
import WebFont from 'webfontloader';
import { ReactQueryDevtools } from "react-query/devtools";

import './assets/styles/tailwind.generated.css'
import App from './App';
// import store from './app/store';
import reportWebVitals from './reportWebVitals';

WebFont.load({
  google: {
    families: ['Barlow Condensed:400,600,700', 'Archivo:400,500,600,700', 'sans-serif'],
  },
});
// Create a client
export const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale={'en'}>
        <App />
      </IntlProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
