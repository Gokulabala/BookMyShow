import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Your publishable key from Stripe Dashboard
const stripePromise = loadStripe("pk_test_51OypqXSCZIoef2VTch2D6uDIRMVBBDKw6HhGMtBOhKRG46ZN9rJzvLArZG1qLn8IW4bKx45MYpZSrXIeLzo7jlVf00aQFXDdzN");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Provider>
);

reportWebVitals();
