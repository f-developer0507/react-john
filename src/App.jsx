import Header from "./components/header/Header";
import Main from "./components/main/main";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/blog/blog";
import Work from "./components/work/work";
import Detail from "./components/detail/detail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/work" element={<Work />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
