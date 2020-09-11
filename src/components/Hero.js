import React from "react";
import HeroArticle from "./HeroArticle";

function Hero({
  mainHeroClass,
  title,
  info,
  heroClass,
  heroBtnInfo,
  heroBtnUrl,
}) {
  return (
    <section className={mainHeroClass}>
      <div className="hero-opacity">
        <div className="hero-wrapper">
          <HeroArticle
            title={title}
            info={info}
            heroClass={heroClass}
            heroBtnInfo={heroBtnInfo}
            heroBtnUrl={heroBtnUrl}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
