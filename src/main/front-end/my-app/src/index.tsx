import React from 'react';
import ReactDOM from 'react-dom/client';

import  App  from './App';
import Login from './pages/Login';
import Map from './pages/Map';
import Router from './routes/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

