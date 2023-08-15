import { Article, ArticleType } from "./Article";
import ArticlesGrid from "./ArticlesGrid";
import ArticlesColumn from "./ArticlesColumn";
import Footer from "./Footer";
import MainBody from "./MainBody";

interface BodyProps {
  mainArticles: Article[];
  sideArticles: Article[];
  quizzes: Article[];
}

const Body = ({ mainArticles, sideArticles, quizzes }: BodyProps) => {
  return (
    <div className="container">
      <div className="row d-flex">
        <MainBody articles={mainArticles} title="Actualités" />
        <ArticlesColumn articles={sideArticles} quizzes={quizzes} />
        <Footer />
      </div>
    </div>
  );
};

export default Body;
