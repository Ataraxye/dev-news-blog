import React from "react";
import ContentLoader from "react-content-loader";

const ThumbnailPlaceholder = (props: any) => (
  <div className="col center mb-4">
    <div className="card h-100">
      <ContentLoader
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        className="card-img-top"
        height="200px"
        {...props}
      >
        <rect width="100%" height="200px" />
      </ContentLoader>

      <ContentLoader
        height="150px"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        className="card-body"
      >
        <rect y="0" width="30%" height="10" />
        <rect y="25" width="100%" height="20" />
        <rect y="50" width="100%" height="20" />
        <rect y="75" width="100%" height="20" />
      </ContentLoader>
    </div>
  </div>
);

export default ThumbnailPlaceholder;
