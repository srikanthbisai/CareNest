import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './routes/layout/Layout';

import Login from './routes/Login';
import Register from './routes/Register';
import Services from './routes/Services';
import HomePage from './routes/Homepage';
import Blog from './routes/Blog';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path:"/", 
          element:(<HomePage/>),
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
           path : "/register",
           element: <Register/>,
        },   
         {
          path: "/services",
          element: <Services/>
         },
         {
          path: "/blog",
          element: <Blog/>
         },



      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
