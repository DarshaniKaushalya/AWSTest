/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import "./style.css";
import CartItem from "./CartItem";
import { addToCart, getCartItems, removeCartItem } from "../../actions";
import { MaterialButton } from "../../components/MaterialUI";
import { useNavigate } from "react-router-dom";
import PriceDetails from "../../components/PriceDetails";

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  //const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);

  const onQuantityIncrement = (id, qty) => {
    //console.log({ id, qty });
    const { name, price, img } = cartItems[id];
    dispatch(addToCart({ id, name, price, img }, 1));
  };
  const onQuantityDecrement = (id, qty) => {
    const { name, price, img } = cartItems[id];
    dispatch(addToCart({ id, name, price, img }, -1));
  };
  const onRemoveCartItem = (id) => {
    dispatch(removeCartItem({ productId: id }));
    window.location.reload(false); //reload the page
  };
  if (props.onlyCartItems) {
    return (
      <>
        {Object.keys(cartItems).map((key, index) => (
          <CartItem
            key={index}
            cartItem={cartItems[key]}
            onQuantityInc={onQuantityIncrement}
            onQuantityDec={onQuantityDecrement}
          />
        ))}
      </>
    );
  }
  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <Card
          headerLeft={`My Cart`}
          headerRight={<div>Deliver to</div>}
          style={{ width: "calc(100%-400px)", overflow: "hidden" }}
        >
          {Object.keys(cartItems).map((key, index) => (
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
              onRemoveCartItem={onRemoveCartItem}
            />
          ))}
          <div
            style={{
              width: "100%",
              display: "flex",
              background: "#ffffff",
              justifyContent: "flex-end",
              boxShadow: "0 0 10px 10px #eee",
              padding: "10px 0",
              boxSizing: "border-box",
            }}
          >
            <div style={{ width: "250px" }}>
              <MaterialButton
                title="PLACE ORDER"
                onClick={() => navigate(`/checkout`)}
              />
            </div>
          </div>
        </Card>
        {/* <Card
          headerLeft="Price"
          style={{
            width: "380px",
          }}
        ></Card> */}

        {/* Price Details Components */}
        <PriceDetails
          totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
            return qty + cart.cartItems[key].qty;
          }, 0)}
          totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            const { price, qty } = cart.cartItems[key];
            return totalPrice + price * qty;
          }, 0)}
        />
      </div>
    </Layout>
  );
};

export default CartPage;
