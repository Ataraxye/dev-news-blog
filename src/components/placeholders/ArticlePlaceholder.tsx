import React from "react";
import ContentLoader from "react-content-loader";

const ArticlePlaceholder = (props: any) => {
  return (
    <div className="col-lg-8 col-md-6 g-4">
      <ContentLoader
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        height="700px"
        width="100%"
        {...props}
      >
        <rect y="0" width="100%" height="80px" />
        <rect y="95" width="100%" height="15px" />
        <rect y="115" width="100%" height="15px" />
        <rect y="145" width="100%" height="500px" />
      </ContentLoader>
      <hr className="mb-0" />

      <div className="row justify-content-center">
        <ContentLoader
          className="col-sm-5 mt-3"
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
          height="100px"
          width="100%"
        >
          <rect className=" shadow-sm" width="100%" height="100px" />
        </ContentLoader>
        <ContentLoader
          className="col-sm-5 mt-3"
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
          height="100px"
          width="100%"
        >
          <rect className=" shadow-sm" width="100%" height="100px" />
        </ContentLoader>
      </div>
    </div>
  );
};

export default ArticlePlaceholder;
