import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/globals.css';

console.log("main.jsx loaded");
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
