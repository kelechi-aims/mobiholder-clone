import React from 'react';
import "./App.css";
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Pricing from './pages/pricing/Pricing';
import FqasPage from './pages/fqas/FqasPage';
import ContactUs from './pages/contactus/ContactUs';

const App = () => {
  const Layout = () => {
    return (
      <div>
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/pricing",
          element: <Pricing />
        },
        {
          path: "/fqas",
          element: <FqasPage />
        },
        {
          path: "/contactus",
          element: <ContactUs />
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App