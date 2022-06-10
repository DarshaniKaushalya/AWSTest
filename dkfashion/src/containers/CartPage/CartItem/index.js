import React, { useState } from "react";
// import { generatePublicUrl } from "../../../urlConfig";
import "./style.css";

const CartItem = (props) => {
  const [qty, setQty] = useState(props.cartItem.qty);
  const { id, name, price, img } = props.cartItem;

  const onQuantityIncrement = () => {
    setQty(qty + 1);
    props.onQuantityInc(id, qty + 1);
  };
  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
    props.onQuantityDec(id, qty - 1);
  };

  return (
    <div className="cartItemContainer">
      <div className="flexRow">
        <div className="cartProImgContainer">
          <img src={img} alt={""} />
        </div>
        <div className="cartItemDetails">
          <div>
            <p>{name}</p>
            <p>$ {price}</p>
          </div>
          <div>Delivery in 3 - 5 days</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "5px 0",
        }}
      >
        {/* quantity control */}
        <div className="quantityControl">
          <button onClick={onQuantityDecrement}>-</button>
          <input value={qty} readOnly />
          <button onClick={onQuantityIncrement}>+</button>
        </div>
        <button className="cartActionBtn">save for later</button>
        {/* <button className="cartActionBtn">Remove</button> */}
        <button
          className="cartActionBtn"
          onClick={() => props.onRemoveCartItem(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
