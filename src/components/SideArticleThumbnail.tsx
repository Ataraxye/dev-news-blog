import Article from "./Article";

interface SideArticleThumbnail {
  article: Article;
}

const SideArticleThumbnail = ({ article }: SideArticleThumbnail) => {
  const imgSrc = "../../articles-images/" + article.image;

  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-6">
          <img
            src={imgSrc}
            className="img-fluid col-12"
            style={{ maxHeight: "120px", objectFit: "cover" }}
          />
        </div>
        <div className="col-6">
          <h5>{article.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default SideArticleThumbnail;
