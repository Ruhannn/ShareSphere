import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthContext";

const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);

  const NavLinks = (
    <>
      {user ? (
        <>
          <NavLink to="/">
            <li>
              <a>Home</a>
            </li>
          </NavLink>
          <NavLink to="/all-services">
            <li>
              <a>Services</a>
            </li>
          </NavLink>
          <li>
            <details className="dark:bg-[#5e5a66] dark:text-white">
              <summary>Dashboard</summary>
              <ul className="p-2 bg-base-100 dark:text-white dark:bg-[#5e5a66]">
                <li>
                  <Link to="/my-services">My services</Link>
                </li>
                <li>
                  <Link to="/add-services">Add services</Link>
                </li>
                <li>
                  <Link to="/my-schedules">My schedules</Link>
                </li>
              </ul>
            </details>
          </li>
        </>
      ) : (
        <>
          <NavLink to="/signup" className="block md:hidden lg:hidden">
            <li>
              <a>Signup</a>
            </li>
          </NavLink>
          <NavLink className="block md:hidden lg:hidden" to="/login">
            <li>
              <a>Login</a>
            </li>
          </NavLink>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut();
    toast.success("Logged Out Successfully");
  };

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, []);
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  const sty = `.custom-animation {
  transition: transform 0.3s ease-in-out;
}

.custom-animation:hover {
  animation: rotateWithBlur 0.3s ease-in-out;
}

@keyframes rotateWithBlur {
  0% {
    transform: rotate(0deg);
    filter: blur(0);
  }
  50% {
    transform: rotate(90deg);
    filter: blur(2px);
  }
  100% {
    transform: rotate(180deg);
    filter: blur(0);
  }
}
`;
  return (
    <>
      <style>{sty}</style>
      <div className="navbar bg-base-100 dark:bg-[#211e34] transition-colors duration-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-current dark:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  z-50 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-[#5e5a66] dark:text-white">
              {NavLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <img
            className="w-9 hidden lg:block md:block"
            src="https://i.ibb.co/LkCYDhx/bird-2.png"
            alt=""
          />
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl dark:text-white">
            ShareSphere
          </Link>
        </div>
        <div className="navbar-end">
          <button
            onClick={handleThemeSwitch}
            className="px-2 bg-transparent border-none bg-none transition-all duration-300 ease-in-out text-lg">
            {theme === "dark" ? (
              <FaSun className="text-white custom-animation" />
            ) : (
              <FaMoon />
            )}
          </button>

          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full dark:bg-white">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-gray-600-200 dark:bg-[#282a36] dark:text-[#f8f8f2] dark:hover:text-[#bfbf6c] rounded-box w-52">
                    <li>
                      <a className="justify-between">{user.displayName}</a>
                    </li>
                    <li>
                      <a className="justify-between">{user.email}</a>
                    </li>

                    <li>
                      <a onClick={handleLogOut}>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="menu btn m-1 bg-base-300 text-black dark:bg-[#3d3f58] dark:text-white border-none hover:text-black w-full hidden md:block lg:block">
                Login/SignUp
              </label>

              <ul
                tabIndex={0}
                className="dropdown-content gap-5 z-50 menu p-2 shadow bg- dark:bg-[#1A1B26] dark:text-white text-black rounded-box sm:w-full md:w-64 lg:w-72 xl:w-96">
                <Link
                  to="/login"
                  className="py-2 px-4 rounded hover:bg-blue-600 transition duration-300 block">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="dark:bg-[#1A1B26] dark:text-white text-black py-2 px-4 rounded hover:bg-blue-600 transition duration-300 block">
                  Sign up
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
