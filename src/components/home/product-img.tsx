import React, { Component } from "react";

interface ProductImgProps {
  products: [];
}

export default class ProductImg extends Component<ProductImgProps> {
  render() {
    const { products } = this.props;

    return (
      <div className="container">
        <button>BACK TO PRODUCTS</button>
      </div>
    );
  }
}
