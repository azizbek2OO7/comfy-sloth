import React, { Component } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Category, Products, ProductImg } from "./components";

import "./assets/main.scss";

const baseURL = "https://dummyjson.com";

interface AppState {
  products: [];
  categories: string[];
  name: string;
  isLoading: boolean;
  search: string;
  pathname: string;
  productID: string;
}

export default class App extends Component<{}, AppState> {
  state: AppState = {
    products: [],
    categories: [],
    name: "All",
    isLoading: true,
    search: "",
    pathname: window.location.pathname,
    productID: "",
  };

  getPage = () => {
    switch (this.state.pathname) {
      case "/product-img":
        return <ProductImg products={this.state.products} />;
    }
  };

  handleCategory = (name: string) => {
    this.setState({ name });
  };

  handleChangeSearch = (search: string) => {
    this.setState({ search });
  };

  handlePathname = (pathname: string) => {
    this.setState({ pathname });
  };

  async componentDidMount() {
    const resProducts = await axios(`${baseURL}/products`);
    const products = await resProducts.data.products;
    const resCategories = await axios(`${baseURL}/products/categories`);
    const categories = await resCategories.data;

    console.log("categories", categories);
    console.log("products", products);

    this.setState({ products, categories: ["All", ...categories], isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Sorry, No Products found</div>;
    }

    const { products, categories, name, search } = this.state;

    const newProducts = name === "All" ? products : products.filter((product) => product["category"] === name);
    console.log("newProducts", newProducts);

    if (this.getPage()) {
      return this.getPage();
    }

    return (
      <div className="app">
        <main>
          <Category categories={categories} onCategory={this.handleCategory} search={search} onChangeSearch={this.handleChangeSearch} />
          <Products products={newProducts} onPathname={this.handlePathname} />
        </main>
      </div>
    );
  }
}
