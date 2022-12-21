import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './global-styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </Provider>
);

reportWebVitals();
