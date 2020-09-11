import React from "react";

function CartItem({ product, onDelete, onIncrement, onDecrement }) {
  const { id, name, price, img, slug, count } = product;
  return (
    <section className="cart-item">
      <div className="cart-row">
        <div className="cart-col">
          <h3>PRODUCT</h3>
          <img src={img} alt="" />
        </div>

        <div className="cart-col">
          <h3>PRODUCT NAME</h3>
          <p>{name}</p>
        </div>

        <div className="cart-col">
          <h3>PRICE</h3>
          <p>$ {price}</p>
        </div>

        <div className="cart-col">
          <h3>QUANTITY</h3>
          <span>
            <button className="btn-qty" onClick={() => onDecrement(id, slug)}>
              -
            </button>
          </span>
          <span>
            <input
              min={0}
              max={10}
              readOnly
              className="input-qty"
              type="number"
              value={count}
            />
          </span>
          <span>
            <button className="btn-qty" onClick={() => onIncrement(id)}>
              +
            </button>
          </span>
        </div>

        <div className="cart-col">
          <h3>DELETE</h3>
          <span>
            <button className="delete-btn" onClick={() => onDelete(slug)}>
              <i className="fa fa-trash"></i>
            </button>
          </span>
        </div>

        <div className="cart-col">
          <h3>TOTAL</h3>
          <p>$ {price * count}</p>
        </div>
      </div>
    </section>
  );
}

export default CartItem;
