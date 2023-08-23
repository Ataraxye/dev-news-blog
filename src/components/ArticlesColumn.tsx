import { Article, ArticleType, ArticlesContainer } from "../scripts/Article";
import QuizArticle from "./QuizArticle";
import SideArticleThumbnail from "./SideArticleThumbnail";
import { typedFetch } from "../scripts/utils";
import { useState, useEffect } from "react";

interface ArticlesColumnProps {
  articles: Article[];
  quizzes: Article[];
}

const ArticlesColumn = () => {
  const [sideArticles, setSideArticles] = useState<Article[]>([]);
  const [quizzes, setQuizzes] = useState<Article[]>([]);

  useEffect(() => {
    typedFetch<ArticlesContainer>("/api/side/articles").then((data) => {
      console.log("Side Articles", data);
      setSideArticles(data.articles);
    });
    typedFetch<ArticlesContainer>("/api/side/quizzes").then((data) =>
      setQuizzes(data.articles)
    );
  }, []);

  console.log("Side Articles in main body", sideArticles);
  return (
    <div className="col-lg-4 col-md-6 col-12 g-4 gx-5">
      <div className="mb-4">
        <QuizArticle title={quizzes.length > 0 ? quizzes[0].title : ""} />
        <h2 style={{ fontFamily: "DreamOrphans", fontSize: "2.5em" }}>
          Vous aimerez aussi...
        </h2>
      </div>
      {sideArticles.length > 0 ? (
        sideArticles.map((article, index) => (
          <>
            <SideArticleThumbnail key={index} article={article} />
            <hr />
          </>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default ArticlesColumn;
