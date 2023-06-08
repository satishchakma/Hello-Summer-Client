import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/ Classes/ Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Instructors from "../Pages/Instructors/Instructors";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
