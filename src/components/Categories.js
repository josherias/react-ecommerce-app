import React from "react";
import { ProductConsumer } from "../context";
import Category from "./Category";

function Categories() {
  return (
    <section className="featured">
      <div className="container">
        <h1>Categories</h1>
        <div className="featured-wrapper">
          <ProductConsumer>
            {(value) => {
              const { categories: products } = value;

              return products.map((product) => (
                <Category key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
}

export default Categories;
