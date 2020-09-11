import React from "react";
import HeroBtn from "./HeroBtn";

function HeroArticle({ title, info, heroClass, heroBtnInfo, heroBtnUrl }) {
  const button =
    heroBtnInfo && heroBtnUrl ? (
      <HeroBtn buttonInfo={heroBtnInfo} heroBtnUrl={heroBtnUrl} />
    ) : null;
  return (
    <article className={heroClass}>
      <h1>{title}</h1>
      <h2>{info}</h2>
      {button}
    </article>
  );
}

export default HeroArticle;
