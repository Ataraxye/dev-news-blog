import React, { useEffect, useState } from "react";
import Article from "./components/Article";
import Body from "./components/Body";
import Header from "./components/Header";
import { parseTextFile } from "./scripts/parser";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleButtonClick = () => {
    console.log("Button Clicked");
  };

  useEffect(() => {
    // Simulate fetching the file using an HTTP request
    fetch("../articles.txt")
      .then((response) => response.text())
      .then((text) => {
        const parsedArticles = parseTextFile(text);
        setArticles(parsedArticles);
      })
      .catch((error) => {
        console.error("Error fetching or parsing the file:", error);
      });
  }, []);

  console.log(articles);
  return (
    <>
      <Header />
      <div className="container-lg center">
        <Body mainArticles={articles} sideArticles={articles} />
      </div>
    </>
  );
}

export default App;
