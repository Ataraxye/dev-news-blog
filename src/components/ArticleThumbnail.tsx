import { Article, ArticleType } from "../scripts/Article";
import "../App.css";
import { Link } from "react-router-dom";

const ArticleThumbnail = ({ id, title, tags, preview, image }: Article) => {
  const imgSrc =
    image === undefined
      ? "../../articles-images/random_code.jpg"
      : "../../articles-images/" + image;

  return (
    //<div className="col-lg-4 col-md-6 center mb-4">
    <div className="col center mb-4">
      <div className="card h-100">
        <img
          src={imgSrc}
          className="card-img-top"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="card-body">
          <p className="tag">{tags.length > 0 ? tags[0] : "Tag"} / 7 Août</p>
          <Link to={`/article/${id}`} className="router-link">
            <h5 className="card-title" style={{ fontSize: "1.1em" }}>
              {title}
            </h5>
          </Link>
          <p className="card-text">{preview}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleThumbnail;
