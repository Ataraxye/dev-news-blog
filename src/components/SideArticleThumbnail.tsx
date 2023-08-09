import { Article, ArticleType } from "./Article";

interface SideArticleThumbnail {
  article: Article;
}

const SideArticleThumbnail = ({ article }: SideArticleThumbnail) => {
  const imgSrc =
    article.image === undefined
      ? "../../articles-images/random_code.jpg"
      : "../../articles-images/" + article.image;
  return (
    <div className="card mb-3">
      <div className="row d-flex align-items-center">
        <div className="col-4">
          <img
            src={imgSrc}
            className="img-fluid"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-8">
          <p className="tag">
            {article.tags.length > 0 ? article.tags[0] : "Article"} / 7 Août
          </p>
          <h5 style={{ fontSize: "1.1em" }}>{article.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default SideArticleThumbnail;
