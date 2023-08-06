import ArticleThumbnail from "./ArticleThumbnail";
import Article from "./Article";

interface ArticlesGridProps {
  articles: Article[];
}

const ArticlesGrid = ({ articles }: ArticlesGridProps) => {
  return (
    <div className="col-md-8 row gy-4">
      {articles.map((article, index) => (
        <ArticleThumbnail
          title={article.title}
          preview={article.preview}
          image={article.image}
        />
      ))}
    </div>
  );
};

export default ArticlesGrid;
