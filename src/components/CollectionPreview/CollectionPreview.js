import React from "react";

import "./CollectionPreview.styles.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
