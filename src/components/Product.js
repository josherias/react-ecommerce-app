import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  const { slug, name, img, price } = product;

  return (
    <article className="product">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img className="product-image" src={img} alt="img" />
          <Link to={`/details/${slug}`} className="product-btn">
            View Details
          </Link>
        </div>
        <div className="product-info">
          <h4>{name}</h4>
          {price ? <p>${price}</p> : null}
        </div>
      </div>
    </article>
  );
}

export default Product;
