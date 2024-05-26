import "./work.css";

import img01 from "./images/img-01.png";
import img02 from "./images/img-02.png";
import img03 from "./images/img-03.png";
import img04 from "./images/img-04.png";

const Work = () => {
  return (
    <section className="work">
      <div className="container">
        <div className="works-row">
          <h2 className="works__title">Work</h2>
          <ul className="works__list">
            <li className="works__item">
              <div className="works__item-img">
                <img src={img01} alt={img01} />
              </div>
              <div className="works__item-content">
                <h3 className="item-content__title">Designing Dashboards</h3>
                <p className="item-content__badge">
                  <span>2020</span> Dashboard
                </p>
                <p className="item-content__text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </li>
            <li className="works__item">
              <div className="works__item-img">
                <img src={img02} alt={img02} />
              </div>
              <div className="works__item-content">
                <h3 className="item-content__title">
                  Vibrant Portraits of 2020
                </h3>
                <p className="item-content__badge">
                  <span>2018</span> Illustration
                </p>
                <p className="item-content__text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </li>
            <li className="works__item">
              <div className="works__item-img">
                <img src={img03} alt={img03} />
              </div>
              <div className="works__item-content">
                <h3 className="item-content__title">
                  36 Days of Malayalam type
                </h3>
                <p className="item-content__badge">
                  <span>2018</span> Typography
                </p>
                <p className="item-content__text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </li>
            <li className="works__item">
              <div className="works__item-img">
                <img src={img04} alt={img04} />
              </div>
              <div className="works__item-content">
                <h3 className="item-content__title">Components</h3>
                <p className="item-content__badge">
                  <span>2018</span> Components, Design
                </p>
                <p className="item-content__text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
