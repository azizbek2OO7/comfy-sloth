import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IEntity } from "types";
import "assets/products-list.scss";

interface ProductsListProps {
  products: IEntity.Product[];
  onProductId: (productId: number) => void;
}

export default class ProductsList extends Component<ProductsListProps> {
  render() {
    const { products, onProductId } = this.props;

    return (
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.thumbnail} alt="" className="productImg" />

            <div className="product-content">
              <h1 className="title">{product.title}</h1>
              <h3 className="price">${product.price}</h3>
              <p className="description">{product?.description}</p>
              <Link to="/about-product">
                <button className="details" onClick={() => onProductId(product.id)}>
                  details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
