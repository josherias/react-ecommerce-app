import React from "react";
import HeroBtn from "../components/HeroBtn";

function NotFound() {
  return (
    <div className="page-not-found">
      <h1>404 Page not found page</h1>
      <HeroBtn buttonInfo="Back to Home" heroBtnUrl="/" />
    </div>
  );
}

export default NotFound;
