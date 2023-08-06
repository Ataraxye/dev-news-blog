import ArticleThumbnail from "./ArticleThumbnail";
import Article from "./Article";

interface ArticlesGridProps {
  articles: Article[];
}

const ArticlesGrid = ({ articles }: ArticlesGridProps) => {
  return (
    <div className="col-md-8 g-4">
      <div className="row row-cols-1 row-cols-md-3 gx-4">
        {articles.map((article, index) => (
          <ArticleThumbnail
            title={article.title}
            preview={article.preview}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlesGrid;
