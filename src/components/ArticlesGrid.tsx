import ArticleThumbnail from "./ArticleThumbnail";
import { Article, ArticleType } from "./Article";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface ArticleGridProps {
  articles: Article[];
}

const ArticlesGrid = ({ articles }: ArticleGridProps) => {
  const params = useParams();

  return (
    <div className="row row-cols-1 row-cols-md-1 row-cols-xl-3 gx-4">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <ArticleThumbnail
            key={index}
            title={article.title}
            type={article.type}
            tags={article.tags}
            preview={article.preview}
            image={article.image}
          />
        ))
      ) : (
        <p>
          On dirait qu'il n'y a pas encore d'articles dans cette catégorie !
          Revenez plus tard !
        </p>
      )}
    </div>
  );
};

export default ArticlesGrid;
