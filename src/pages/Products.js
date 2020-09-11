import React from "react";
import Hero from "../components/Hero";
import ProductsContainer from "../components/ProductsContainer";

function Products() {
  return (
    <section className="products">
      <Hero
        mainHeroClass="hero-products"
        title="OUR PRODUCTS"
        info="Genuine, Durable, Affordable, Stylish, Fashionable"
        heroClass="hero-section"
      />
      <ProductsContainer />
    </section>
  );
}

export default Products;
