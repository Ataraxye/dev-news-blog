import ArticlesColumn from "./ArticlesColumn";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Header />
      <div className="container-lg center">
        <div className="container">
          <div className="row d-flex">
            <Outlet />
            <ArticlesColumn />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
