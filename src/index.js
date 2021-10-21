import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import WebFont from 'webfontloader';

import './assets/styles/tailwind.generated.css'
import App from './App';
import store from './app/store';
import reportWebVitals from './reportWebVitals';

WebFont.load({
  google: {
    families: ['Barlow Condensed:400,600,700', 'Archivo:400,500,600,700', 'sans-serif'],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider locale={navigator.language}>
        <App />
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
