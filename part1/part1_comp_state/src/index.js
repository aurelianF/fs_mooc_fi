import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRerendering from './AppRerendeding';
import AppEventHandles from './AppEventHandles';

let counter = 1
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppRerendering /> */}
    <AppEventHandles />
  </React.StrictMode>
);

/* const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <AppRerendering counter={counter} />
  )
}
refresh();
counter++;
refresh();

setInterval(() => {
  refresh();
  counter++;
}, 1000) */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
