import React, { useEffect, useState } from "react";
import { Article, ArticleType } from "./components/Article";
import Body from "./components/Body";
import Header from "./components/Header";
import { Shuffle } from "./scripts/utils";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBody from "./components/HomeBody";
import CategoryBody from "./components/CategoryBody";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />}>
          <Route path="/" element={<MainBody />}></Route>
          <Route path="/category/:category" element={<CategoryBody />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
