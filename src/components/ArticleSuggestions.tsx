import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Article, ArticlesContainer } from "../scripts/Article";
import "../App.css";
import { typedFetch } from "../scripts/utils";

const ArticleSuggestions = () => {
  let params = useParams();
  let [suggestedArticle1, setSuggestedArticle1] = useState<Article>();
  let [suggestedArticle2, setSuggestedArticle2] = useState<Article>();

  useEffect(() => {
    typedFetch<ArticlesContainer>("/api/articles/random").then((data) => {
      setSuggestedArticle1(data.articles[0]);
    });
    typedFetch<ArticlesContainer>("/api/articles/random").then((data) => {
      setSuggestedArticle2(data.articles[0]);
    });
  }, [params]);

  return (
    <div className="row justify-content-center">
      <Link
        to={suggestedArticle1 != null ? `/article/${suggestedArticle1.id}` : ``}
        className="col-sm-5 shadow-sm m-4"
        style={{
          textDecoration: "none",
          fontFamily: "DreamOrphans",
          color: "black",
          backgroundColor: "#dddddd",
        }}
      >
        <div className="row g-0 m-2">
          <div className="col-1 text-center my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-compact-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
              />
            </svg>
          </div>
          <div className="col-11 text-center my-auto">
            {suggestedArticle1 != null ? suggestedArticle1.title : "Loading..."}
          </div>
        </div>
      </Link>
      <Link
        to={suggestedArticle2 != null ? `/article/${suggestedArticle2.id}` : ``}
        className="col-sm-5 shadow-sm m-4"
        style={{
          textDecoration: "none",
          fontFamily: "DreamOrphans",
          color: "black",
          backgroundColor: "#dddddd",
        }}
      >
        <div className="row g-0 m-2">
          <div className="col-11 text-center my-auto">
            {suggestedArticle2 != null ? suggestedArticle2.title : "Loading..."}
          </div>
          <div className="col-1 text-center my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-compact-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleSuggestions;
