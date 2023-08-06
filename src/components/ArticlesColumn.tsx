import Article from "./Article";
import SideArticleThumbnail from "./SideArticleThumbnail";

interface ArticlesColumnProps {
  articles: Article[];
}

const ArticlesColumn = ({ articles }: ArticlesColumnProps) => {
  return (
    <div className="col-md-4">
      {articles.map((article, index) => (
        <SideArticleThumbnail article={article} />
      ))}
    </div>
  );
};

export default ArticlesColumn;
