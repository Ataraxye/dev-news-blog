import Article from "./Article";

interface SideArticleThumbnail {
  article: Article;
}

const SideArticleThumbnail = ({ article }: SideArticleThumbnail) => {
  const imgSrc = "../../articles-images/" + article.image;

  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-4">
          <img src={imgSrc} className="img-fluid rounded-start" />
        </div>
        <div className="col-8 h-100">
          <p>{article.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SideArticleThumbnail;
