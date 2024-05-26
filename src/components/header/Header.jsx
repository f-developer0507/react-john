import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
  const submit = () => {
    const headerNav = document.querySelector(".header__nav");
    headerNav.classList.toggle("header__nav--mobile");
  };

  const activeLink = "active";
  const normalLink = "header__link";
  return (
    <header className="site-header">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to={"/work"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Works
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to={"/detail"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Detail
              </NavLink>
            </li>
          </ul>
          <button type="button" className="header__menu-btn" onClick={submit}>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
