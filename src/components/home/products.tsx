import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../assets/products.scss";

interface ProductsProps {
  products: any[];
  onPathname: (pathname: string) => void;
}

export default class Products extends Component<ProductsProps> {
  render() {
    const { products, onPathname } = this.props;

    const handlePathname = (pathname: string) => {
      window.history.pushState({}, "", pathname);
      onPathname(pathname);
    };

    return (
      <div>
        <div className="products-navbar">
          <div className="lists">
            <button>list1</button>
            <button>list2</button>
          </div>
          <p>{products.length} products found</p>
          <div className="line"></div>
          <div className="sorts">
            <p>Sort By</p>
            <select name="" id="">
              <option value="">Price (Lowest)</option>
              <option value="">Price (Hights)</option>
              <option value="">Name (A-Z)</option>
              <option value="">Name (Z-A)</option>
            </select>
          </div>
        </div>
        <div className="products">
          {products.map((product) => (
            <div key={product["id"]} className="product">
              <img onClick={() => handlePathname("/product-img")} src={product["images"][0]} alt="" className="productImg" />
              <div className="product-content">
                <h3>{product["title"]}</h3>
                <p>{product["price"]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
