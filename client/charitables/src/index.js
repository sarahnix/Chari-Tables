import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  /*Route,
  Link,*/
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home";
import Find from "./routes/Find";
import Volunteer from "./routes/Volunteer";
import Donate from "./routes/Donate";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "find",
        element: <Find />,
      },
      {
        path: "volunteer",
        element: <Volunteer />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
