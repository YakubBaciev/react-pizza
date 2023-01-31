import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#c2bcbc"
    foregroundColor="#e7e4e4"
  >
    <circle cx="138" cy="130" r="115" />
    <rect x="19" y="270" rx="5" ry="5" width="241" height="23" />
    <rect x="20" y="321" rx="5" ry="5" width="240" height="48" />
    <rect x="19" y="395" rx="5" ry="5" width="91" height="31" />
    <rect x="159" y="395" rx="12" ry="12" width="98" height="34" />
  </ContentLoader>
);

export default Skeleton;
