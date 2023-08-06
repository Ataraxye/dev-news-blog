import Article from "./Article";
import ArticlesGrid from "./ArticlesGrid";
import ArticlesColumn from "./ArticlesColumn";
import Footer from "./Footer";
import MainBody from "./MainBody";

interface BodyProps {
  mainArticles: Article[];
  sideArticles: Article[];
}

const Body = ({ mainArticles, sideArticles }: BodyProps) => {
  return (
    <div className="row">
      <MainBody articles={mainArticles} title="Actualités" />
      <ArticlesColumn articles={sideArticles} />
      <Footer />
    </div>
  );
};

export default Body;
