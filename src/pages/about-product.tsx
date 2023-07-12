import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IEntity } from "types";

import "assets/about-product.scss";

interface AboutProductProps {
  products: IEntity.Product[];
  productId: number;
}

interface AboutProductState {
  imgUrl: string;
}

export default class AboutProduct extends Component<AboutProductProps, AboutProductState> {
  state: AboutProductState = {
    imgUrl: "",
  };

  handleImg = (imgUrl: string) => {
    this.setState({ imgUrl });
  };

  render() {
    const { imgUrl } = this.state;
    const { products, productId } = this.props;

    console.log("productid =>>>>4", productId);

    const filterProducts = products.find((product) => product.id === productId);
    const foundImages = filterProducts?.images as string[];
    console.log("filterProducts", filterProducts);

    return (
      <div className="about-product">
        <Link to="/">
          <button className="back-btn">BACK TO PRODUCTS</button>
        </Link>
        <div className="product-box">
          <div className="product-images">
            <img className="main-img" src={`${imgUrl || filterProducts?.thumbnail}`} alt="" />
            <div className="images">
              {foundImages?.map((img, idx) => (
                <img key={idx} src={`${img}`} alt="" className={`${imgUrl === img ? "currentImg" : ""}`} onClick={() => this.handleImg(img)} />
              ))}
            </div>
          </div>
          <div className="product-content">
            <h1 className="title">{filterProducts?.title}</h1>
            <p>⭐⭐⭐⭐⭐(60 customer reviews)</p>
            <h3 className="price">
              <span>Price:</span> ${filterProducts?.price}
            </h3>
            <p className="description">{filterProducts?.description}</p>
            <table>
              <thead>
                <tr>
                  <th>Available </th>
                  <th>SCU </th>
                  <th>Brand </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>In Stock</td>
                  <td>Rec1Ntk7siEEW9ha1</td>
                  <td>{filterProducts?.brand}</td>
                </tr>
              </tbody>
            </table>
            <div className="line"></div>
          </div>
        </div>
      </div>
    );
  }
}
