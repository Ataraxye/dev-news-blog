import Article from "./Article";
import ArticlesGrid from "./ArticlesGrid";
import ArticlesColumn from "./ArticlesColumn";

interface BodyProps {
  mainArticles: Article[];
  sideArticles: Article[];
}

const Body = ({ mainArticles, sideArticles }: BodyProps) => {
  return (
    <div className="row">
      <ArticlesGrid articles={mainArticles} />
      <ArticlesColumn articles={sideArticles} />
    </div>
  );
};

export default Body;
