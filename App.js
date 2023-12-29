import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import Careers from "./src/components/Careers";
//here createBrowserRouter will help in create the router configuration
//here RouterProvider will actually take the router configuration and enable the routing
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantDetail from "./src/components/RestaurantDetail";
//import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path: "/careers",
        element: <Careers />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetail />
      },
      {
        path: "/grocery",
        element: <Suspense><Grocery /></Suspense>
      }
    ],
    errorElement: <Error />
  }
]);


const appRoot = ReactDOM.createRoot(document.getElementById("root"));
//appRoot.render(<AppLayout/>);
appRoot.render(<RouterProvider router={appRouter} />);
