import Article from "./Article";
import ArticlesGrid from "./ArticlesGrid";

interface MainBodyProps {
  articles: Article[];
  title: string;
}

const MainBody = ({ articles, title }: MainBodyProps) => {
  return (
    <div className="col-lg-8 col-md-6 g-4 gx-5">
      <div className="mb-4">
        <h2 style={{ fontFamily: "DreamOrphans", fontSize: "2.5em" }}>
          {title}
        </h2>
      </div>
      <ArticlesGrid articles={articles} />
    </div>
  );
};

export default MainBody;
