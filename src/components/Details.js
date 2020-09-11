import React from "react";
import { Link } from "react-router-dom";

function Details({ product, addToCart }) {
  const {
    name,
    img,
    slug,
    brand,
    company,
    price,
    category,
    details,
    inCart,
  } = product;
  return (
    <section className="details">
      <div className="container">
        <div className="details-wrapper">
          <h1 className="details-header">{name}</h1>

          <div className="details-row">
            <div className="details-col-1">
              <div className="col-img-wrapper">
                <img src={img} className="col-img" alt="" />
              </div>
            </div>

            <div className="details-col-2">
              <div className="col-text-wrapper">
                <h1>Brand : {brand}</h1>

                <h3>Company : {company}</h3>

                <h3>Category : {category} </h3>

                <h3>Price : ${price} </h3>

                <h3>Other Details</h3>
                <p>{details}</p>

                <div className="col-text-buttons">
                  <Link to="/" className="col-btn btn-home">
                    Back To Home
                  </Link>
                  <button
                    className={
                      inCart ? "col-btn btn-cart-incart" : "col-btn btn-cart"
                    }
                    disabled={inCart ? true : false}
                    onClick={() => addToCart(slug)}
                  >
                    {inCart ? "In Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
