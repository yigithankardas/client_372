import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'typeface-roboto';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BlankPage from './pages/BlankPage';
import Hello from './pages/Hello';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/hello',
        element: <Hello />,
      },
      {
        path: '/blank',
        element: <BlankPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
