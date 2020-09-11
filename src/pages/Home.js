import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Categories from "../components/Categories";

function Home() {
  return (
    <React.Fragment>
      <Hero
        mainHeroClass="hero"
        title="REACT ONLINE STORE"
        info="Get all your shopping needs in one place with our online store"
        heroClass="hero-section"
        heroBtnInfo="View All Products"
        heroBtnUrl="/products"
      />
      <Featured />
      <Categories />
    </React.Fragment>
  );
}

export default Home;
