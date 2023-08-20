import { Article, ArticleType, ArticlesContainer } from "./Article";
import ArticlesGrid from "./ArticlesGrid";
import { typedFetch } from "../scripts/utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryBody = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const params = useParams();

  useEffect(() => {
    typedFetch<ArticlesContainer>(`/api/category/${params.category}`).then(
      (data) => setArticles(data.articles)
    );
  }, []);

  return (
    <div className="col-lg-8 col-md-6 g-4 gx-5">
      <div className="mb-4">
        <h2 style={{ fontFamily: "DreamOrphans", fontSize: "2.5em" }}>
          {params.category}
        </h2>
      </div>
      <ArticlesGrid articles={articles} />
    </div>
  );
};

export default CategoryBody;
