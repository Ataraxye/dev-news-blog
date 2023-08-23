import React from "react";
import { useParams } from "react-router-dom";
import { typedFetch } from "../scripts/utils";
import { Article, ArticlesContainer } from "../scripts/Article";
import { useState, useEffect } from "react";
import ArticleSuggestions from "./ArticleSuggestions";

const ArticlePage = () => {
  const params = useParams();
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    console.log(params);
    typedFetch<ArticlesContainer>(`/api/articles/${params.articleid}`).then(
      (data) => setArticle(data.articles[0])
    );
  }, [params]);

  const parser = new DOMParser();

  return (
    <div className="col-lg-8 col-md-6 g-4">
      <div>
        <h2
          style={{
            fontFamily: "DreamOrphans",
            fontSize: "2.5em",
            marginBottom: "1rem",
          }}
        >
          {article?.title}
        </h2>
        <p
          className="subtitle"
          style={{
            fontSize: "1.1em",
            fontWeight: "450",
            color: "#777777",
          }}
        >
          {article?.preview}
        </p>
        <img
          src={"../../articles-images/" + article?.image}
          className="w-100"
        />

        <div className="m-4">
          <p>{article?.content}</p>
        </div>
      </div>
      <hr className="mb-0" />
      <ArticleSuggestions />
    </div>
  );
};

export default ArticlePage;
