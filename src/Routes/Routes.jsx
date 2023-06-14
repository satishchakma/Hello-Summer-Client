import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/ Classes/ Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Instructors from "../Pages/Instructors/Instructors";
import Errorpage from "../components/Errorpage/Errorpage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../Pages/Dashboard/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Errorpage></Errorpage>,
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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "manage_classes",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manage_users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "add_class",
        element: <AddClass></AddClass>,
      },
      {
        path: "my_classes",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "my_selected_classes",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "my_enrolled_classes",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
    ],
  },
]);
