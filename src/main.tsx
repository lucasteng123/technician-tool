import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Root from './routes/root';
// import './index.css';
import '@fontsource/public-sans';

import { CssVarsProvider } from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider defaultMode="system">
      <CssBaseline />
      <RouterProvider router={router} />
      
    </CssVarsProvider>
  </React.StrictMode>
);
