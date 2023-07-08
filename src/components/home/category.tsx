import React, { Component } from "react";
import axios from "axios";
import "../../assets/categories.scss";

interface CategoryProps {
  categories: string[];
  search: string;
  onCategory: (name: string) => void;
  onChangeSearch: (searchValue: string) => void;
}

export default class Category extends Component<CategoryProps> {
  render() {
    const { categories, onCategory, search, onChangeSearch } = this.props;

    return (
      <div>
        <input type="text" value={search} placeholder="Search" onChange={(e) => onChangeSearch(e.target.value)} />
        <div className="categories">
          <h2>Category</h2>

          {categories.map((category) => (
            <ul key={category}>
              <li className="category" onClick={() => onCategory(category)}>
                {category}
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
