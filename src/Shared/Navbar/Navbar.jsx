import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Providers/AuthProviders";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100 container mx-auto my-2 lg:flex hidden">
        <Link to={`/`} className="flex-1">
          <img src={logo} alt="" />
        </Link>
        <div className="gap-5 mr-5 text-lg">
          <NavLink
            to={`/`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={`/instructors`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Instructors
          </NavLink>

          <NavLink
            to={`/classes`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Classes
          </NavLink>
          {user && (
            <NavLink
              to={`/dashboard`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          )}
        </div>

        {user && (
          <div>
            <div className="dropdown dropdown-end items-center mx-4">
              <label tabIndex={0} className="my-avatar ">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <div className="tooltip" data-tip={user?.displayName}>
                      <img className="mask mask-circle" src={user?.photoURL} />
                    </div>
                  ) : (
                    <div
                      className="avatar tooltip"
                      data-tip={user?.displayName}
                    >
                      <div className="w-12 rounded-full">
                        <UserCircleIcon />
                      </div>
                    </div>
                  )}
                </div>
              </label>
            </div>
          </div>
        )}

        <div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn bg-[#848c2f] hover:bg-[#545b13] text-white"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn bg-[#848c2f] hover:bg-[#545b13] text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
