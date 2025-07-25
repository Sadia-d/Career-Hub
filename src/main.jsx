import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Statistics from './Components/Statistics/Statistics';
import AppliedJob from './Components/AppliedJob/AppliedJob';
import JobDetails from './Components/JObDetails/JobDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Statistics></Statistics>
      },
      {
        path:'/applied',
        element:<AppliedJob></AppliedJob>,
        loader: () => fetch('../jobs.json')
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader :()=> fetch('../jobs.json')
        
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
