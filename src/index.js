import React from 'react';
import ReactDOM from 'react-dom/client';
import TryGlassesAppOnl from './Component/TryGlassesAppOnline/TryGlassesAppOnl';
import "./assets/style/index.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <TryGlassesAppOnl />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
