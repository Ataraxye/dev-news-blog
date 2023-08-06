import Article from "./Article";

interface SideArticleThumbnail {
  article: Article;
}

const SideArticleThumbnail = ({ article }: SideArticleThumbnail) => {
  const imgSrc = "../../articles-images/" + article.image;

  return (
    <div className="card mb-2">
      <div className="row">
        <div className="col-6">
          <img
            src={imgSrc}
            className="img-fluid rounded-start col-12"
            style={{ maxHeight: "120px", objectFit: "cover" }}
          />
        </div>
        <div className="col-6 h-100">
          <p>{article.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SideArticleThumbnail;
