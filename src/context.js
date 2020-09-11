import React, { Component } from "react";
import { products, categories } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    categories: [],
    featuredProducts: [],
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    const tempProducts = [...products];

    const tempCategories = [...categories];

    const featuredProducts = tempProducts.filter(
      (product) => product.featured === true
    );

    this.setState({
      products: tempProducts,
      categories: tempCategories,
      featuredProducts,
    });
  }

  getProduct = (slug) => {
    const tempProducts = [...this.state.products];

    const product = tempProducts.find((product) => product.slug === slug);

    return product;
  };

  getCategories = (category) => {
    const tempProducts = [...this.state.products];

    const categories = tempProducts.filter(
      (product) => product.category === category
    );

    return categories;
  };

  addToCart = (slug) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getProduct(slug));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
        };
      },
      () => this.addTotals()
    );
  };

  handleIncrement = (id) => {
    const tempCart = [...this.state.cart];

    const tempProduct = tempCart.find((product) => product.id === id);

    const index = tempCart.indexOf(tempProduct);

    const product = tempCart[index];

    product.count = product.count + 1;

    product.total = product.count * product.price;

    this.setState(
      {
        cart: [...tempCart],
      },
      () => {
        this.addTotals();
      }
    );
  };

  handleDecrement = (id, slug) => {
    const tempCart = [...this.state.cart];

    const selectedProduct = tempCart.find((product) => product.id === id);

    const index = tempCart.indexOf(selectedProduct);

    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count <= 0) this.handleDelete(slug);

    product.total = product.count * product.price;

    this.setState(
      {
        cart: [...tempCart],
      },
      () => {
        this.addTotals();
      }
    );
  };

  handleDelete = (slug) => {
    const tempProducts = [...this.state.products];
    const tempCart = [...this.state.cart];

    const newCart = tempCart.filter((product) => product.slug !== slug);

    const index = tempProducts.indexOf(this.getProduct(slug));

    let removedProduct = tempProducts[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      {
        cart: newCart,
        products: tempProducts,
      },
      this.addTotals()
    );
  };

  handleClearCart = () => {
    const tempProducts = [...products];

    this.setState({
      cart: [],
      products: tempProducts,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
    });
  };

  addTotals = () => {
    let subTotal = 0;
    const tempCart = [...this.state.cart];
    tempCart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState({
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total,
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          addToCart: this.addToCart,
          onIncrement: this.handleIncrement,
          onDecrement: this.handleDecrement,
          onDelete: this.handleDelete,
          onClearCart: this.handleClearCart,
          getCategories: this.getCategories,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
