import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
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
          {/* {user && (
            <NavLink
              to={`/mytoys/`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Toys
            </NavLink>
          )} */}
          {/* {user && (
            <NavLink
              to={`/addatoy`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Add A Toy
            </NavLink>
          )} */}
          <NavLink
            to={`/classes`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Classes
          </NavLink>
          <NavLink
            to={`/dashboard`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </div>

        {/* {user && (
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
        )} */}

        {/* <div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-accent  text-white"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-accent text-white">Login</button>
            </Link>
          )}
        </div> */}
      </div>
      {/* mobile menubar */}
      <nav className="flex items-center lg:hidden justify-between py-4 px-6 bg-gray-900 text-white">
        <div className="flex items-center">
          <NavLink to={`/`} className="flex-1">
            <img src={logo} alt="" />
          </NavLink>
        </div>

        {/* <div className="flex items-center">
          <button
            className="text-white focus:outline-none lg:hidden z-[99] pr-2"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} size="2xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
          </button>
        </div> */}

        {/* {isOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-gray-900 z-50">
            <ul className="flex flex-col items-center justify-center h-full gap-4">
              <li className="my-4">
                <NavLink
                  to={`/`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to={`/alltoys`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  All Toys
                </NavLink>
              </li>
              <li>
                {user && (
                  <NavLink
                    to={`/mytoys/`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    My Toys
                  </NavLink>
                )}
              </li>
              <li>
                {user && (
                  <NavLink
                    to={`/addatoy`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Add A Toy
                  </NavLink>
                )}
              </li>
              <li className="">
                <NavLink
                  to={`/blogs`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                {user && (
                  <div>
                    <div className="dropdown dropdown-end items-center mx-4">
                      <label tabIndex={0} className="my-avatar ">
                        <div className="w-10 rounded-full">
                          {user?.photoURL ? (
                            <div
                              className="tooltip"
                              data-tip={user?.displayName}
                            >
                              <img
                                className="mask mask-circle"
                                src={user?.photoURL}
                              />
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
              </li>
              <li>
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="btn btn-accent  text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-accent text-white">Login</button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )} */}
      </nav>
    </div>
  );
};

export default Navbar;
