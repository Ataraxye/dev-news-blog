import ArticleThumbnail from "./ArticleThumbnail";
import { Article, ArticleType } from "../scripts/Article";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ThumbnailPlaceholder from "./placeholders/ThumbnailPlaceholder";

interface ArticleGridProps {
  articles: Article[];
}

const ArticlesGrid = ({ articles }: ArticleGridProps) => {
  const params = useParams();
  let [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="row row-cols-1 row-cols-md-1 row-cols-xl-3 gx-4">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <ArticleThumbnail
            key={index}
            id={article.id}
            title={article.title}
            type={article.type}
            tags={article.tags}
            preview={article.preview}
            image={article.image}
            content={article.content}
          />
        ))
      ) : (
        <>
          <ThumbnailPlaceholder />
          <ThumbnailPlaceholder />
          <ThumbnailPlaceholder />
        </>
      )}
    </div>
  );
};

export default ArticlesGrid;
