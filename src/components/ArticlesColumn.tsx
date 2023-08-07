import Article from "./Article";
import QuizArticle from "./QuizArticle";
import SideArticleThumbnail from "./SideArticleThumbnail";

interface ArticlesColumnProps {
  articles: Article[];
}

const ArticlesColumn = ({ articles }: ArticlesColumnProps) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 g-4 gx-5">
      <div className="mb-4">
        <QuizArticle title={articles.length > 1 ? articles[0].title : ""} />
        <h2 style={{ fontFamily: "DreamOrphans", fontSize: "2.5em" }}>
          Vous aimerez aussi...
        </h2>
      </div>
      {articles.slice(1).map((article, index) => (
        <>
          <SideArticleThumbnail article={article} />
          <hr />
        </>
      ))}
    </div>
  );
};

export default ArticlesColumn;
