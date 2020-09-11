import React from "react";
import { Link } from "react-router-dom";

function Category({ product }) {
  const { slug, name, img } = product;

  return (
    <article className="product">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img className="product-image" src={img} alt="img" />
          <Link to={`/categories/${slug}`} className="product-btn">
            View Category
          </Link>
        </div>
        <div className="product-info">
          <h4>{name}</h4>
        </div>
      </div>
    </article>
  );
}

export default Category;
