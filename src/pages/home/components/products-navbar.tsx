import React, { Component } from "react";
import { IEntity } from "types";

import "assets/products-navbar.scss";

interface ProductsNavbarProps {
  products: IEntity.Product[];
  currentList: number;
  onList: (listIdx: number) => void;
  onSort: (value: string) => void;
}

export default class ProductsNavbar extends Component<ProductsNavbarProps> {
  render() {
    const { products, onList, currentList, onSort } = this.props;

    return (
      <div className="products-navbar">
        <div className="lists">
          <button onClick={() => onList(0)} className={`${currentList === 0 ? "current-list" : ""}`}>
            <svg stroke="black" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button onClick={() => onList(1)} className={`${currentList === 1 ? "current-list" : ""}`}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <p className="found-product">{products.length} products found</p>
        <div className="line"></div>
        <div className="sorts">
          <p>Sort By</p>
          <select onChange={(e) => onSort(e.target.value)}>
            <option value="Lowest">Price (Lowest)</option>
            <option value="Hights">Price (Hights)</option>
            <option value="A-Z">Name (A-Z)</option>
            <option value="Z-A">Name (Z-A)</option>
          </select>
        </div>
      </div>
    );
  }
}
