import "./App.css";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Pricing from "./pages/pricing/Pricing";
import FqasPage from "./pages/fqas/FqasPage";
import ContactUs from "./pages/contactus/ContactUs";
import Navbar from "./components/navbar/Navbar";
import Legal from "./pages/legal/Legal";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import SignUpIndividual from "./pages/signup/SignUpIndividual";
import SignUpOrganization from "./pages/signup/SignUpOrganization";
import ResetPassword from "./pages/signup/ResetPassword";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsCondition from "./pages/legal/TermsCondition";
import { LargeScreenSideMenu } from "./pages/dashboards/components/SideMenu/LargeScreenSideMenu";
import IndividualDashboard from "./pages/dashboards/Individual/IndividualDashboard";
import OrganisationDashboard from "./pages/dashboards/organisation/OrganisationDashboard";
const MainLayout = () => {
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

const MinLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const AuthLayout = ({ role }: { role: "individual" | "organisation" }) => {
  return (
    <div className="bg-[#0d0d0d]">
      <div className="container mx-auto p-4 w-full grid lg:grid-col-2 gap-2">
        <div className="lg:w-[18%] lg:fixed hidden lg:block">
          <LargeScreenSideMenu role={role} />
        </div>
        <div className="lg:ml-[23%] xl:ml-[20%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/use-cases", element: <Home /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/fqas", element: <FqasPage /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/legal", element: <Legal /> },
    ],
  },
  {
    path: "/",
    element: <MinLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signup/individual", element: <SignUpIndividual /> },
      { path: "/signup/organization", element: <SignUpOrganization /> },
      { path: "/resetpassword", element: <ResetPassword /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/termsandconditions", element: <TermsCondition /> },
    ],
  },
  {
    path: "/individual",
    element: <AuthLayout role="individual" />,
    children: [{ path: "dashboard", element: <IndividualDashboard /> }],
  },
  {
    path: "/organisation",
    element: <AuthLayout role="organisation" />,
    children: [{ path: "dashboard", element: <OrganisationDashboard /> }],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
