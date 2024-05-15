import "./css/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-row">
        <ul className="footer__list social-icons">
          <li className="footer__item">
            <a href="https://ru-ru.facebook.com/" target="_blank" className="footer__link"></a>
          </li>
          <li className="footer__item">
            <a href="https://www.instagram.com/" target="_blank" className="footer__link"></a>
          </li>
          <li className="footer__item">
            <a href="https://twitter.com/" target="_blank" className="footer__link"></a>
          </li>
          <li className="footer__item">
            <a href="https://www.linkedin.com/" target="_blank" className="footer__link"></a>
          </li>
        </ul>
        <p className="footer__copyright">Copyright ©2020 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
