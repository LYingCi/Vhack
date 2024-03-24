import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './homepage';
import OrganicPage from './pages/OrganicPage';
import VerticalPage from './pages/VerticalPage';
import SolarDripper from './pages/SolarDripper';
import Review from './reviewpage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "Organic",
    element: <OrganicPage/>,
  },
  {
    path: "Vertical",
    element: <VerticalPage/>,
  },
  {
    path: "Dripper",
    element: <SolarDripper/>,
  },
  {
    path: "review",
    element: <Review/>,
  },

  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
