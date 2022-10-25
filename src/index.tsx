import React from 'react';
import ReactDOM from 'react-dom/client';
import Providers from 'Providers';
import { setAutoFreeze } from 'immer';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'normalize.css';
import './index.less';
import './App.scss';

setAutoFreeze(false);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();