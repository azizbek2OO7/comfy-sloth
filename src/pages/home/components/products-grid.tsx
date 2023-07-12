import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IEntity } from "types";
import "assets/products.scss";

interface ProductsGridProps {
  products: IEntity.Product[];
  onProductId: (productId: number) => void;
}

export default class ProductsGrid extends Component<ProductsGridProps> {
  render() {
    const { products, onProductId } = this.props;

    return (
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <Link to="/about-product">
              <img onClick={() => onProductId(product.id)} src={product.thumbnail} alt="" className="productImg" />
            </Link>
            <div className="product-content">
              <h3 className="title">{product.title}</h3>
              <p className="price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
