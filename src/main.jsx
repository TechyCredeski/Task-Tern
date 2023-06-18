import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './pages/Error-page.jsx';
import Signup from './pages/Signup.jsx';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // errorElement: <ErrorPage/>,
    children: [
    ]
  },

  {
    path: "/signup",
    element: <Signup/>,
  },
  
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "*",
    element: <ErrorPage/>,
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
