import Featured from "./featured/Featured";
import Intro from "./intro/Intro";
import Recent from "./recent-posts/Recent";

const Main = () => {
  return (
    <main className="main">
      <Intro />
      <Recent />
      <Featured />
    </main>
  );
};

export default Main;
