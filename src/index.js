import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './screens/Home'; 
import CalltUs from './screens/CalltUs';
import AboutUs from './screens/AboutUs';
import GraphicDesign from './screens/GraphicDesign';
import Webdesign from './screens/Webdesign';
import Marketing from './screens/Marketing';

const router = createBrowserRouter([
  {
    path: "/AboutUs",
    element: <AboutUs/>,
    
  },
  {
    path: "/GraphicDesign",
    element: <GraphicDesign/>,
  },
  {
    path: "/CalltUs",
    element: <CalltUs/>,
  },
  {
    path: "/Webdesign",
    element: <Webdesign/>,
  },
  {
    path: "/Marketing",
    element: <Marketing/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
