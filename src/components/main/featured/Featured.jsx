import "./css/featured.css";

const Featured = ({ featured }) => {
  return (
    <>
      <div className="featured-item__img">
        <img src={featured.img} />
      </div>
      <div className="featured-item content">
        <h3 className="featured-item__title">{featured.title}</h3>
        <p className="featured-item__data">
          <span>{featured.spanDate}</span> {featured.spanText}
        </p>
        <p className="featured-item__text">{featured.text}</p>
      </div>
    </>
  );
};

export default Featured;
