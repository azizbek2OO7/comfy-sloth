import React, { Component } from "react";
import { IEntity } from "types";
import Category from "./components/category";
import ProductsGrid from "./components/products-grid";
import ProductsList from "./components/products-list";
import ProductsNavbar from "./components/products-navbar";

interface HomeProps {
  products: IEntity.Product[];
  categories: string[];
  search: string;
  categoryName: string;
  onCategory: (category: string) => void;
  onProductId: (productId: number) => void;
  onChangeSearch: (search: string) => void;
  onSort: (value: string) => void;
}

interface HomeState {
  listIdx: number;
}

export default class Home extends Component<HomeProps, HomeState> {
  state: HomeState = {
    listIdx: 0,
  };

  handleList = (listIdx: number) => {
    this.setState({ listIdx });
  };

  render() {
    const { listIdx } = this.state;
    const { products, categories, search, categoryName, onProductId, onChangeSearch, onCategory, onSort } = this.props;

    function showProducts() {
      return listIdx ? <ProductsList products={products} onProductId={onProductId} /> : <ProductsGrid products={products} onProductId={onProductId} />;
    }

    return (
      <main>
        <Category categories={categories} onCategory={onCategory} search={search} onChangeSearch={onChangeSearch} categoryName={categoryName} />
        <div>
          <ProductsNavbar products={products} currentList={listIdx} onList={this.handleList} onSort={onSort} />
          {products.length ? showProducts() : <h1>Sorry, no products found!</h1>}
        </div>
      </main>
    );
  }
}
