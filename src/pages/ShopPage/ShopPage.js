import React from "react";
import "./ShopPage.styles.scss";

import SHOP_DATA from "../../assets/data/shop.data";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map((collection) => {
          return <CollectionPreview key={collection.id} {...collection} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
