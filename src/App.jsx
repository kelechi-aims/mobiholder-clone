import "./App.css";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Pricing from "./pages/pricing/Pricing";
import FqasPage from "./pages/fqas/FqasPage";
import ContactUs from "./pages/contactus/ContactUs";
import Navbar from "./components/navbar/Navbar";
import Legal from "./pages/legal/Legal";

const App = () => {
  const Layout = () => {
    return (
      <div className="relative">
        <div className="z-50 absolute w-full">
          <Navbar />
        </div>
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/fqas",
          element: <FqasPage />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/legal",
          element: <Legal />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
