import React from "react";
import Product from "../components/Product";
import { ProductConsumer } from "../context";

function ProductsContainer() {
  return (
    <section className="products-container">
      <div className="container">
        <h1>All Products</h1>
        <div className="featured-wrapper">
          <ProductConsumer>
            {(value) => {
              const { products } = value;

              return products.map((product) => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
}

export default ProductsContainer;
