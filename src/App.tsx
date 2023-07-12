import { Component } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Home, AboutProduct } from "pages";
import { IEntity } from "types";

import "assets/main.scss";

const baseURL = "https://dummyjson.com";

interface AppState {
  products: IEntity.Product[];
  categories: string[];
  category: string;
  isLoading: boolean;
  search: string;
  productId: number;
  optionValue: string;
}

export default class App extends Component<{}, AppState> {
  state: AppState = {
    products: [],
    categories: [],
    category: "All",
    isLoading: true,
    search: "",
    productId: JSON.parse(localStorage.getItem("productID")!),
    optionValue: "Lowest",
  };

  handleCategory = (category: string) => {
    this.setState({ category });
  };

  handleChangeSearch = (search: string) => {
    this.setState({ search });
  };

  handleProductId = (productId: number) => {
    localStorage.setItem("productID", JSON.stringify(productId));
    this.setState({ productId: JSON.parse(localStorage.getItem("productID")!) });
    console.log("ProductID", productId);
  };

  handleSort = (optionValue: string) => {
    let sortedProducts = optionValue === "Lowest" ? this.state.products.sort((a, b) => a.price - b.price) : this.state.products;
    sortedProducts = optionValue === "Hights" ? this.state.products.sort((a, b) => -a.price + b.price) : this.state.products;
    sortedProducts = optionValue === "A-Z" ? this.state.products.sort((a, b) => a.title.localeCompare(b.title)) : this.state.products;
    sortedProducts = optionValue === "Z-A" ? this.state.products.sort((a, b) => -a.title.localeCompare(b.title)) : this.state.products;

    this.setState({ products: sortedProducts, optionValue });
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
      return <div className="loading"></div>;
    }

    const { products, categories, category, search, productId, optionValue } = this.state;

    const newProducts = category === "All" ? products : products.filter((product) => product.category === category);
    const searchedProducts = newProducts.filter((product) => product.title.toLowerCase().includes(search));
    const sortedProducts = optionValue === "Lowest" ? searchedProducts.sort((a, b) => a.price - b.price) : searchedProducts;

    return (
      <div className="app">
        <main>
          <Routes>
            <Route path="/about-product" element={<AboutProduct products={products} productId={productId} />} />
            <Route
              path="/"
              element={
                <Home
                  products={sortedProducts}
                  categories={categories}
                  categoryName={category}
                  search={search}
                  onCategory={this.handleCategory}
                  onProductId={this.handleProductId}
                  onChangeSearch={this.handleChangeSearch}
                  onSort={this.handleSort}
                />
              }
            />
          </Routes>
        </main>
      </div>
    );
  }
}
