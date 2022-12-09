import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {ContextProvider} from "./contexts/ContextProvider";
import {registerLicense} from '@syncfusion/ej2-base'


registerLicense("ORg4AjUWIQA/Gnt2VVhjQlFac1ZJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RgWX1ccnJXT2BUUUM=");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
