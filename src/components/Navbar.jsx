import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { GlobalContext } from "../context/GlobalContext";
import NavLinks from "./Navlinks"
const themes = {
  winter: "winter",
  dracula: "dracula",
};

let themeFromLocalStorage = () => {
  return localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : themes.winter;
};

function Navbar() {
  const { dispatch, user } = useContext(GlobalContext);

  const [currentTheme, setCurrenttheme] = useState(themeFromLocalStorage());

  const handleMode = (e) => {
    if (e.target.checked) {
      setCurrenttheme(themes.dracula);
    } else {
      setCurrenttheme(themes.winter);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
    const localtheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", localtheme);
  }, [currentTheme]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOG_OUT" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <nav className=" bg-cyan-500">
        <div className="align-content navbar">
          <div className="navbar-start">
            <Link to="/" className="btn btn-secondary hidden lg:flex ">
              MyMarket
            </Link>
            <div className="dropdown lg:hidden btn-secondary ">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1  btn-secondary "
              >
                MyMarket
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLinks />
              </ul>
            </div>
          </div>
          <div className="navbar-center gap-6  hidden  lg:flex ">
           <NavLinks/>
          </div>
          <div className="navbar-end flex gap-5 items-center">
            {/* Dark/light */}
            <label onClick={handleMode} className="swap swap-rotate">
              <input type="checkbox" />
              {/* sun icon */}
              <FaSun className="swap-on fill-current w-6 h-6" />
              {/* moon icon */}
              <FaMoon className="swap-off  fill-current w-6 h-6" />
            </label>
            {user && <p>{user.displayName}</p>}

            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} />
              </div>
            </div>
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
