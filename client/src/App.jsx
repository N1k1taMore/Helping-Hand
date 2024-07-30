import './app.scss';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/Home';
import Navbar from "./components/navbar/Navbar";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Donate from './pages/Donate/donate';
import Category from './pages/category/Category';
import AllDonation from './pages/AllDonation/AllDonation';

import MyDonations from "./pages/MyDonations/mydonation";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
        <Navbar />
          <Outlet />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/donate',
          element: <Donate />,
        },
        {
          path: '/category',
          element: <Category />,
        },
        {
          path: '/alldonation',
          element: <AllDonation />,
        },
        {
          path: '/mydonation',
          element: <MyDonations/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
