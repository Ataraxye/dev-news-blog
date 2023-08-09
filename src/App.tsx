import React, { useEffect, useState } from "react";
import { Article, ArticleType } from "./components/Article";
import Body from "./components/Body";
import Header from "./components/Header";
import { Shuffle } from "./scripts/utils";
//import { parseTextFile } from "./scripts/parser";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Simulate fetching the file using an HTTP request
    fetch("../articles.json")
      .then((response) => response.text())
      .then((text) => {
        const parsedArticles = JSON.parse(text);
        setArticles(parsedArticles.articles);
      })
      .catch((error) => {
        console.error("Error fetching or parsing the file:", error);
      });
  }, []);

  let mainArticles = articles.filter(
    (article) => article.type === ArticleType.Article && article.preview !== ""
  );
  let sideArtices = articles.filter(
    (article) => article.type === ArticleType.Article && article.preview === ""
  );
  let quizzes = articles.filter((article) => article.type === ArticleType.Quiz);

  return (
    <>
      <Header />
      <div className="container-lg center">
        <Body
          mainArticles={mainArticles}
          sideArticles={sideArtices}
          quizzes={quizzes}
        />
      </div>
    </>
  );
}

export default App;
