import "./css/recent.css";

const Recent = () => {
  return (
    <section className="recent">
      <div className="container">
        <div className="recent-row">
          <div className="recent__content">
            <h2 className="recent-content__title">Recent posts</h2>
            <p className="recent-content__text">View all</p>
          </div>
          <ul className="recent__list">
            <li className="recent__item">
              <h3 className="recent-item__title">
                Making a design system from scratch
              </h3>
              <p className="recent-item__data">
                12 Feb 2020 <span>|</span> Design, Pattern
              </p>
              <p className="recent-item__text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </li>
            <li className="recent__item">
              <h3 className="recent-item__title">
                Creating pixel perfect icons in Figma
              </h3>
              <p className="recent-item__data">
                12 Feb 2020 <span>|</span> Figma, Icon Design
              </p>
              <p className="recent-item__text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Recent;
