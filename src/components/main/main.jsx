import Featured from "./featured/Featured";
import Intro from "./intro/Intro";
import Recent from "./recent-posts/Recent";

// images
import itemImg01 from "../main/featured/images/item-img-01.png";
import itemImg02 from "../main/featured/images/item-img-02.png";
import itemImg03 from "../main/featured/images/item-img-03.png";

// images

const Main = () => {
  const featured = [
    {
      img: itemImg01,
      title: "Designing Dashboards",
      spanDate: "2020",
      spanText: "Dashboard",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      img: itemImg02,
      title: "Vibrant Portraits of 2020",
      spanDate: "2018",
      spanText: "Illustration",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      img: itemImg03,
      title: "36 Days of Malayalam type",
      spanDate: "2018",
      spanText: "Typography",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <main className="main">
      <Intro />
      <Recent />
      <section className="featured">
        <div className="container">
          <div className="featured__content">
            <h2 className="featured-content__title">Featured works</h2>
          </div>
          <ul className="featured__list">
            {featured.map((item, index) => (
              <li className="featured__item" key={index}>
                <Featured featured={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
