import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Providers/AuthProviders";
import {
  UserCircleIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { isDarkModeContext } from "../../Day night toggle/DayNight";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const isDarkMode = useContext(isDarkModeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  //my menu
  return (
    <nav
      className={`navbar ${
        isDarkMode ? "dark" : ""
      } bg-base-100 container mx-auto my-2 px-4 rounded-lg w-full`}
    >
      <div className="flex items-center justify-between w-full">
        <Link to={`/`} className="flex-1">
          <img src={logo} alt="" />
        </Link>

        <div>
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button
              className="navbar-burger"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-10 w-10 rounded-2xl z-20 absolute right-2 top-14 font-bold" />
              ) : (
                <Bars4Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden justify-center items-center lg:flex gap-5 mr-3 text-lg">
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
            {/* Dropdown */}
            {user && (
              <div className="dropdown dropdown-end items-center mx-4">
                <label tabIndex={0} className="my-avatar">
                  <div className="w-10 rounded-full">
                    {user?.photoURL ? (
                      <div className="tooltip" data-tip={user?.displayName}>
                        <img
                          className="mask mask-circle"
                          src={user?.photoURL}
                          alt={user?.displayName}
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-3 transition duration-3000 bg-[#fcc044] flex flex-col gap-4 w-full absolute top-[-20px] py-10 left-0 h-[100vh] z-10">
          <NavLink
            to={`/`}
            className="block px-4 py-2 text-sm text-center bg-[#f9fafb] font-medium rounded-lg"
            activeClassName="bg-[#e2e8f0]"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to={`/instructors`}
            className="block px-4 py-2 text-sm text-center bg-[#f9fafb] font-medium rounded-lg"
            activeClassName="bg-[#e2e8f0]"
            onClick={toggleMenu}
          >
            Instructors
          </NavLink>
          <NavLink
            to={`/classes`}
            className="block px-4 py-2 text-sm text-center bg-[#f9fafb] font-medium rounded-lg"
            activeClassName="bg-[#e2e8f0]"
            onClick={toggleMenu}
          >
            Classes
          </NavLink>
          {user && (
            <NavLink
              to={`/dashboard`}
              className="block px-4 py-2 text-sm text-center bg-[#f9fafb] font-medium rounded-lg"
              activeClassName="bg-[#e2e8f0]"
              onClick={toggleMenu}
            >
              Dashboard
            </NavLink>
          )}
          {/* Dropdown */}
          {user && (
            <div className="dropdown dropdown-end items-center mx-4">
              <label tabIndex={0} className="my-avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <div className="tooltip" data-tip={user?.displayName}>
                      <img
                        className="mask mask-circle"
                        src={user?.photoURL}
                        alt={user?.displayName}
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
      )}
    </nav>
  );
};

export default Navbar;
//  <div>
//       <div
//         className={`navbar ${
//           isDarkMode ? "dark" : ""
//         }  bg-base-100  container mx-auto my-2 lg:flex   px-4 rounded-lg`}
//       >
//         <Link to={`/`} className="flex-1">
//           <img src={logo} alt="" />
//         </Link>
//         <div className="gap-5 mr-5 text-lg">
//           <NavLink
//             to={`/`}
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to={`/instructors`}
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             Instructors
//           </NavLink>

//           <NavLink
//             to={`/classes`}
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             Classes
//           </NavLink>
//           {user && (
//             <NavLink
//               to={`/dashboard`}
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               Dashboard
//             </NavLink>
//           )}
//         </div>

//         {user && (
//           <div>
//             <div className="dropdown dropdown-end items-center mx-4">
//               <label tabIndex={0} className="my-avatar ">
//                 <div className="w-10 rounded-full">
//                   {user?.photoURL ? (
//                     <div className="tooltip" data-tip={user?.displayName}>
//                       <img className="mask mask-circle" src={user?.photoURL} />
//                     </div>
//                   ) : (
//                     <div
//                       className="avatar tooltip"
//                       data-tip={user?.displayName}
//                     >
//                       <div className="w-12 rounded-full">
//                         <UserCircleIcon />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </label>
//             </div>
//           </div>
//         )}

//         <div>
//           {user ? (
//             <button
//               onClick={handleLogOut}
//               className="btn bg-[#848c2f] hover:bg-[#545b13] text-white"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link to="/login">
//               <button className="btn bg-[#848c2f] hover:bg-[#545b13] text-white">
//                 Login
//               </button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
