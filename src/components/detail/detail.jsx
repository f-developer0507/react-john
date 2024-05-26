import Heading from "../heading/heading";
import "./detail.css";

import img from "./images/img.png";

const Detail = () => {
  return (
    <>
      <section className="detail">
        <div className="container">
          <div className="detail-row">
            <div className="detail-content">
              <h2 className="detail-content__title">
                Designing Dashboards with usability in mind
              </h2>
              <p className="detail-content__badge">
                <span>2020</span> Dashboard, User Experience Design
              </p>
              <p className="detail-content__text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="detail-img">
              <img src={img} alt={img} />
            </div>
          </div>
        </div>
      </section>
      <Heading />
    </>
  );
};

export default Detail;
