import React from "react";
import { ProductConsumer } from "../context";

function CartCheckOut() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cart, onClearCart, cartSubTotal, cartTax, cartTotal } = value;

        return (
          <div className="cart-checkout">
            {cart.length === 0 ? null : (
              <button className="btn-clear-cart" onClick={() => onClearCart()}>
                Clear Cart
              </button>
            )}

            <h3>SUB TOTAL : $ {cartSubTotal}</h3>
            <h3>TAX : $ {cartTax}</h3>
            <h3>TOTAL : $ {cartTotal}</h3>
            <button className="btn-checkout">Continue to CheckOut</button>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

export default CartCheckOut;
