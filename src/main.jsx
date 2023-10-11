import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Class from './components/Class/Class';
import About from './components/About/About';
import Trainers from './components/Trainers/Trainers';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/class.json'),
      },
      {
        path: '/about',
        element: <About></About>,
        loader: () => fetch('/about.json'),
      },
      {
        path: "/class",
        element: <Class></Class>,
        loader: () => fetch('/class.json'),
      },
      {
        path: '/trainers',
        element: <Trainers></Trainers>,
        loader: () => fetch('/trainer.json'),
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('/blogs.json'),
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      }
      



    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
