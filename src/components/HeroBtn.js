import React from "react";
import { Link } from "react-router-dom";

function HeroBtn({ buttonInfo, heroBtnUrl }) {
  return (
    <button className="btn">
      <Link to={heroBtnUrl} className="link">
        {buttonInfo}
      </Link>
    </button>
  );
}

export default HeroBtn;
