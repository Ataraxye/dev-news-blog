import { Article, ArticleType } from "./Article";
import QuizArticle from "./QuizArticle";
import SideArticleThumbnail from "./SideArticleThumbnail";

interface ArticlesColumnProps {
  articles: Article[];
  quizzes: Article[];
}

const ArticlesColumn = ({ articles, quizzes }: ArticlesColumnProps) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 g-4 gx-5">
      <div className="mb-4">
        <QuizArticle title={quizzes.length > 0 ? quizzes[0].title : ""} />
        <h2 style={{ fontFamily: "DreamOrphans", fontSize: "2.5em" }}>
          Vous aimerez aussi...
        </h2>
      </div>
      {articles.map((article, index) => (
        <>
          <SideArticleThumbnail article={article} />
          <hr />
        </>
      ))}
    </div>
  );
};

export default ArticlesColumn;
