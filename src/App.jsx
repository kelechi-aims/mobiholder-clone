import React from 'react';
import "./App.css";
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

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