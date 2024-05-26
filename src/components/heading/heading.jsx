import "./heading.css";

import img01 from "./images/img-01.png";
import img02 from "./images/img-02.png";

const Heading = () => {
  return (
    <section className="heading">
      <div className="container">
        <div className="heading-row">
          <div className="heading__content">
            <h1 className="heading__title">Heading 1</h1>
            <h2 className="heading__subtitle">Heading 2</h2>
            <p className="heading__text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="heading__img-wrapper">
            <img
              src={img01}
              alt={img01}
              className="heading__img"
              width={680}
              height={460}
            />
            <img
              src={img02}
              alt={img02}
              className="heading__img"
              width={680}
              height={460}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heading;
