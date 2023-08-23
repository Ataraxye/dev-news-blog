import ArticlePage from "./components/ArticlePage";
import Body from "./components/Body";
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
          <Route path="/article/:articleid" element={<ArticlePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
