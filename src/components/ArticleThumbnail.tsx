import Article from "./Article";

const ArticleThumbnail = ({ title, preview, image }: Article) => {
  const imgSrc = "../../articles-images/" + image;
  console.log(imgSrc);

  return (
    <div className="col-md-4 col-sm-6">
      <div className="card h-100">
        <img
          src={imgSrc}
          className="card-img-top h-50"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{preview}</p>
        </div>
        <div className="card-footer text-body-secondary">2 days ago</div>
      </div>
    </div>
  );
};

export default ArticleThumbnail;
