import React, { Component } from "react";
import "assets/categories.scss";

interface CategoryProps {
  categories: string[];
  search: string;
  onCategory: (name: string) => void;
  onChangeSearch: (searchValue: string) => void;
  categoryName: string;
}

export default class Category extends Component<CategoryProps> {
  render() {
    const { categories, onCategory, search, onChangeSearch, categoryName } = this.props;

    return (
      <div className="home-left">
        <input type="text" value={search} placeholder="Search" onChange={(e) => onChangeSearch(e.target.value)} />
        <div className="categories">
          <h2>Category</h2>

          {categories.map((category, idx) => (
            <ul key={idx}>
              <li className={`category ${category === categoryName ? "textLine" : ""}`} onClick={() => onCategory(category)}>
                {category}
              </li>
            </ul>
          ))}
        </div>
        <div className="price">
          <h2>Price</h2>
          <input type="range" name="price" min="0" max="309999" />
        </div>
      </div>
    );
  }
}
