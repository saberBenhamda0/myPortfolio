import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from './pages/home/index.jsx'
import Projects from './pages/projects/index.jsx'
import About from './pages/about/index.jsx'
import Contact from './pages/contact/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
    {
    path: "/projects",
    element: <Projects />,
    },
    {
    path: "/about",
    element: <About />,
  },
  {
    path:"/contact",
    element: <Contact />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
