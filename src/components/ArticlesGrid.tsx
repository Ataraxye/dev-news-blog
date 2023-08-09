import ArticleThumbnail from "./ArticleThumbnail";
import { Article, ArticleType } from "./Article";

interface ArticlesGridProps {
  articles: Article[];
}

const ArticlesGrid = ({ articles }: ArticlesGridProps) => {
  return (
    <div className="row row-cols-1 row-cols-md-1 row-cols-xl-3 gx-4">
      {articles.map((article, index) => (
        <ArticleThumbnail
          title={article.title}
          type={article.type}
          tags={article.tags}
          preview={article.preview}
          image={article.image}
        />
      ))}
    </div>
  );
};

export default ArticlesGrid;
