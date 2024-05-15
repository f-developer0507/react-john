import "./css/featured.css";

import itemImg01 from "./images/item-img-01.png";
import itemImg02 from "./images/item-img-02.png";
import itemImg03 from "./images/item-img-03.png";

const Featured = () => {
  return (
    <section className="featured">
      <div className="container">
        <div className="featured__content">
          <h2 className="featured-content__title">Featured works</h2>
        </div>
        <ul className="featured__list">
          <li className="featured__item">
            <div className="featured-item__img">
              <img src={itemImg01} alt="itemImg01" />
            </div>
            <div className="featured-item content">
              <h3 className="featured-item__title">Designing Dashboards</h3>
              <p className="featured-item__data">
                <span>2020</span> Dashboard
              </p>
              <p className="featured-item__text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </li>
          <li className="featured__item">
            <div className="featured-item__img">
              <img src={itemImg02} alt="itemImg02" />
            </div>
            <div className="featured-item content">
              <h3 className="featured-item__title">
                Vibrant Portraits of 2020
              </h3>
              <p className="featured-item__data">
                <span>2018</span> Illustration
              </p>
              <p className="featured-item__text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </li>
          <li className="featured__item">
            <div className="featured-item__img">
              <img src={itemImg03} alt="itemImg03" />
            </div>
            <div className="featured-item content">
              <h3 className="featured-item__title">
                36 Days of Malayalam type
              </h3>
              <p className="featured-item__data">
                <span>2018</span> Typography
              </p>
              <p className="featured-item__text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Featured;
