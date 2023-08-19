import { Article, ArticleType } from "./Article";
import ArticlesGrid from "./ArticlesGrid";
import ArticlesColumn from "./ArticlesColumn";
import Footer from "./Footer";
import MainBody from "./MainBody";

interface BodyProps {
  mainArticles: Article[];
  mainArticlesTitle: string;
  sideArticles: Article[];
  quizzes: Article[];
}

const Body = ({
  mainArticles,
  mainArticlesTitle,
  sideArticles,
  quizzes,
}: BodyProps) => {
  return (
    <div className="container">
      <div className="row d-flex">
        <MainBody
          articles={mainArticles}
          title={mainArticlesTitle != "" ? mainArticlesTitle : "Actualités"}
        />
        <ArticlesColumn articles={sideArticles} quizzes={quizzes} />
        <Footer />
      </div>
    </div>
  );
};

export default Body;
