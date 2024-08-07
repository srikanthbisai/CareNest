import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './routes/layout/Layout';

import Login from './routes/Login';
import Register from './routes/Register';
import Services from './routes/Services';
import HomePage from './routes/Homepage';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, // Correct JSX syntax
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


      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
