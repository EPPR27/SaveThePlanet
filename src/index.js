import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Logros from './Components/Logros';
import CarbonoCero from './Components/CarbonoCero';
import CampaniasGanadas from './Components/CampaniasGanadas';
import ReclamosForm from './Components/ReclamosForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/logros',
    element: <Logros />
  },
  {
    path: '/carbono-cero',
    element: <CarbonoCero />
  },
  {
    path: '/campanias-ganadas',
    element: <CampaniasGanadas />
  },
  {
    path: '/Reclamos',
    element: <ReclamosForm />
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);