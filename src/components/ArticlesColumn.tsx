import Article from "./Article";
import SideArticleThumbnail from "./SideArticleThumbnail";

interface ArticlesColumnProps {
  articles: Article[];
}

const ArticlesColumn = ({ articles }: ArticlesColumnProps) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 g-4 gx-5">
      <h2 style={{ fontFamily: "DreamOrphans", fontSize: "2.5em" }}>
        Vous aimerez aussi...
      </h2>
      {articles.map((article, index) => (
        <SideArticleThumbnail article={article} />
      ))}
    </div>
  );
};

export default ArticlesColumn;
