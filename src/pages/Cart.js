import React from "react";
import CartItem from "../components/CartItem";
import CartCheckOut from "../components/CartCheckOut";
import { ProductConsumer } from "../context";

function Cart() {
  return (
    <section className="cart">
      <div className="container">
        <h1>ITEMS IN CART</h1>
        <div className="cart-wrapper">
          <ProductConsumer>
            {(value) => {
              const { cart, onDelete, onIncrement, onDecrement } = value;

              if (cart.length === 0)
                return (
                  <h1 className="not-found">Your cart is currently Empty !</h1>
                );

              return cart.map((item) => (
                <CartItem
                  key={item.id}
                  product={item}
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                />
              ));
            }}
          </ProductConsumer>
          <CartCheckOut />;
        </div>
      </div>
    </section>
  );
}

export default Cart;
