import Article from "./components/Article";
import Body from "./components/Body";
import Header from "./components/Header";
import "./App.css";

let mainArticles: Article[] = [
  {
    title: "Article 1",
    preview: "This is a preview",
    image: "random_code.jpg",
  },
  {
    title: "Article 2",
    preview: "This is a preview",
    image: "random_code_2.jpg",
  },
  {
    title: "Article 3",
    preview: "This is a preview",
    image: "random_code.jpg",
  },
  {
    title: "Article 4",
    preview: "This is a preview",
    image: "random_code.jpg",
  },
  {
    title: "Article 1",
    preview: "This is a preview",
    image: "random_code.jpg",
  },
  {
    title: "Article 2",
    preview: "This is a preview",
    image: "random_code_2.jpg",
  },
  {
    title: "Article 3",
    preview: "This is a preview",
    image: "random_code.jpg",
  },
  {
    title: "Article 4",
    preview: "This is a preview",
    image: "random_code.jpg",
  },
];

let sideArticles: Article[] = [
  {
    title: "Side Article 1",
    preview: "This is a preview",
    image: "random_code.jpg",
  },
  {
    title: "Side Article 2",
    preview: "This is a preview",
    image: "random_code_2.jpg",
  },
  {
    title: "Side Article 3",
    preview: "This is a preview",
    image: "random_code_2.jpg",
  },
  {
    title: "Side Article 4",
    preview: "This is a preview",
    image: "random_code.jpg",
  },
];

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleButtonClick = () => {
    console.log("Button Clicked");
  };

  return (
    <>
      <Header />
      <div className="container-lg center">
        <Body mainArticles={mainArticles} sideArticles={sideArticles} />
      </div>
    </>
  );
}

export default App;
