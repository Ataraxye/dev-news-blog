import Article from "./Article";
import ArticlesGrid from "./ArticlesGrid";
import "../App.css";

interface MainBodyProps {
  articles: Article[];
  title: string;
}

const MainBody = ({ articles, title }: MainBodyProps) => {
  return (
    <div className="col-lg-8 col-md-6 g-4">
      <h2 style={{ fontFamily: "DreamOrphans", fontSize: "2.5em" }}>
        {" "}
        Actualités{" "}
      </h2>
      <ArticlesGrid articles={articles} />
    </div>
  );
};

export default MainBody;
