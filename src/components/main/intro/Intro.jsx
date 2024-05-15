import "./css/intro.css";
import introImg from "./images/intro-img.png";
const Intro = () => {
  return (
    <section className="site-intro">
      <div className="container">
        <div className="intro-row">
          <div className="intro__content">
            <h2 className="intro-content__title">
              Hi, I am John, <br /> Creative Technologist
            </h2>
            <p className="intro-content__text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button type="button" className="intro-content__btn">
              Download Resume
            </button>
          </div>
          <div className="intro__img-wrapper">
            <img src={introImg} alt="introImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
