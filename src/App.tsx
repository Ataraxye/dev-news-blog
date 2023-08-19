import React, { useEffect, useState } from "react";
import { Article, ArticleType } from "./components/Article";
import Body from "./components/Body";
import Header from "./components/Header";
import { Shuffle } from "./scripts/utils";
//import { parseTextFile } from "./scripts/parser";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [mainArticles, setMainArticles] = useState<Article[]>([]);
  const [mainArticlesTitle, setMainArticlesTitle] = useState<string>("");

  let handleTagSelection = (tag: string) => {
    setMainArticles(
      articles.filter(
        (article) =>
          article.type == ArticleType.Article &&
          article.preview !== "" &&
          article.tags.includes(tag)
      )
    );
    setMainArticlesTitle(tag);
  };

  useEffect(() => {
    // Simulate fetching the file using an HTTP request
    fetch("../articles.json")
      .then((response) => response.text())
      .then((text) => {
        const parsedArticles = JSON.parse(text);
        setArticles(parsedArticles.articles);
        setMainArticles(
          parsedArticles.articles.filter(
            (article: Article) =>
              article.type === ArticleType.Article && article.preview !== ""
          )
        );
      })
      .catch((error) => {
        console.error("Error fetching or parsing the file:", error);
      });
  }, []);

  let sideArtices = articles.filter(
    (article) => article.type === ArticleType.Article && article.preview === ""
  );
  let quizzes = articles.filter((article) => article.type === ArticleType.Quiz);

  let tags = new Set<string>();
  articles.forEach((article) => article.tags.forEach((tag) => tags.add(tag)));

  return (
    <>
      <Header tags={Array.from(tags)} onSelectTag={handleTagSelection} />
      <div className="container-lg center">
        <Body
          mainArticles={mainArticles}
          mainArticlesTitle={mainArticlesTitle}
          sideArticles={sideArtices}
          quizzes={quizzes}
        />
      </div>
    </>
  );
}

export default App;
