import "./css/header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a href="#!" className="header__link" id="active">
                Home
              </a>
            </li>
            <li className="header__item">
              <a href="#!" className="header__link">
                Blog
              </a>
            </li>
            <li className="header__item">
              <a href="#!" className="header__link">
                Works
              </a>
            </li>
            <li className="header__item">
              <a href="#!" className="header__link">
                Detail
              </a>
            </li>
          </ul>
          <button type="button" className="header__menu-btn">
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
