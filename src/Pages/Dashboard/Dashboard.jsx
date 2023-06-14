import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import {
  UserGroupIcon,
  BookmarkIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const Dashboard = () => {
  // TODO: make it dynamic based on db data later

  const [isAdmin] = useAdmin();
  const isDashboardRoute = window.location.pathname == "/dashboard";

  // console.log("this is adminin or not", isAdmin);
  // const [isInstructor, isInstructorLoading] = useInstructor();
  const [isInstructor] = useInstructor();
  console.log("this is instructor or not", isInstructor);

  return (
    <div className="drawer lg:drawer-open">
      {/* {isDashboardRoute && (
        <h1 className="text-2xl text-center font-bold absolute mb-4 text-red-400 bg-yellow-400 w-full">
          Welcome to the Dashboard!
        </h1>
      )} */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>

        {isDashboardRoute && (
          <h1 className="text-2xl text-center font-bold absolute top-0 mb-4 text-white p-8 bg-blue-300 w-full">
            Welcome to the Dashboard!
          </h1>
        )}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          {isAdmin && (
            <>
              <li className="mb-4">
                <Link
                  to="/"
                  className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                >
                  <ArrowLeftIcon className="w-6 h-6"></ArrowLeftIcon>
                  Back to Home
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dashboard/manage_classes"
                  className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="text-lg mr-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  Manage Classes
                </Link>
              </li>

              <li className="mb-4">
                <Link
                  to="/dashboard/manage_users"
                  className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                >
                  <UserGroupIcon className="w-6 h-6"></UserGroupIcon>
                  Manage Users
                </Link>
              </li>
            </>
          )}

          {isInstructor && (
            <>
              <li className="mb-4">
                <Link
                  to="/"
                  className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                >
                  <ArrowLeftIcon className="w-6 h-6"></ArrowLeftIcon>
                  Back to Home
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dashboard/add_class"
                  className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="text-lg mr-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  Add a class
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dashboard/my_classes"
                  className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                >
                  <UserGroupIcon className="w-6 h-6"></UserGroupIcon>
                  My classes
                </Link>
              </li>
            </>
          )}
          {!isAdmin && !isInstructor && (
            <>
              <li className="mb-4">
                <Link
                  to="/"
                  className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                >
                  <ArrowLeftIcon className="w-6 h-6"></ArrowLeftIcon>
                  Back to Home
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dashboard/my_selected_classes"
                  className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                >
                  <BookmarkIcon className="w-6 h-6"></BookmarkIcon>
                  My selected classes
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dashboard/my_enrolled_classes"
                  className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                >
                  <UserGroupIcon className="w-6 h-6"></UserGroupIcon>
                  My enrolled classes
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
