import React, { Component } from "react";
import { ProductContext } from "../context";
import Product from "../components/Product";

class CategoriesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props.match.params.category,
    };
  }

  static contextType = ProductContext;

  render() {
    let value = this.context;

    const { getCategories } = value;

    const products = getCategories(this.state.category);

    return (
      <section className="products-container">
        <div className="container">
          <h1>{this.state.category.toUpperCase()}</h1>
          <div className="featured-wrapper">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default CategoriesPage;
