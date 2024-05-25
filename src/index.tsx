import './index.css';
import './assets/fonts/Nunito-Black.ttf';
import './assets/fonts/Nunito-Bold.ttf';
import './assets/fonts/Nunito-ExtraBold.ttf';
import './assets/fonts/Nunito-ExtraLight.ttf';
import './assets/fonts/Nunito-Light.ttf';
import './assets/fonts/Nunito-Regular.ttf';
import './assets/fonts/Nunito-SemiBold.ttf';

import LazyRouter from './LazyRouter';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LazyRouter />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
