import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Create a root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);