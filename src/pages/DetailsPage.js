import React, { Component } from "react";
import Details from "../components/Details";
import { ProductContext } from "../context";
import ProductNotFound from "../components/ProductNotFound";

class DetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
    };
  }

  static contextType = ProductContext;

  componentDidMount() {}

  render() {
    let value = this.context;

    const { getProduct, addToCart } = value;

    const product = getProduct(this.state.slug);

    //if product is undefined
    if (!product) return <ProductNotFound />;

    return <Details product={product} addToCart={addToCart} />;
  }
}

export default DetailsPage;
