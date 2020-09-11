import React from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";

function Featured() {
  return (
    <section className="featured">
      <div className="container">
        <h1>Featured Products</h1>
        <div className="featured-wrapper">
          <ProductConsumer>
            {(value) => {
              const { featuredProducts } = value;

              return featuredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
}

export default Featured;
