/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, getAddress, getCartItems } from "../../actions";
import Layout from "../../components/Layout";
import {
  MaterialButton,
  MaterialInput,
  Anchor,
} from "../../components/MaterialUI";
import Card from "../../components/UI/Card";
import AddressForm from "./AddressForm";
import "./style.css";
import PriceDetails from "../../components/PriceDetails";
import CartPage from "../CartPage";
import "./style.css";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const CheckoutStep = (props) => {
  return (
    <div className="checkoutStep">
      <div
        onClick={props.onClick}
        className={`checkoutHeader ${props.active && "active"}`}
      >
        <div>
          <span className="stepNumber">{props.stepNumber}</span>
          <span className="stepTitle">{props.title}</span>
        </div>
      </div>
      {props.body && props.body}
    </div>
  );
};

const Address = ({
  adr,
  selectAddress,
  enableAddressEditForm,
  confirmDeliveryAddress,
  onAddressSubmit,
}) => {
  return (
    <div className="flexRow addressContainer">
      <div>
        <input name="address" onClick={() => selectAddress(adr)} type="radio" />
      </div>
      <div className="flexRow sb addressinfo">
        {!adr.edit ? (
          <div style={{ width: "100%" }}>
            <div className="addressDetail">
              <div>
                <span className="addressName">{adr.name}</span>
                <span className="addressType">{adr.addressType}</span>
                <span className="addressMobileNumber">{adr.mobileNumber}</span>
              </div>
              {adr.selected && (
                <Anchor
                  name="EDIT"
                  onClick={() => enableAddressEditForm(adr)}
                  style={{
                    fontWeight: "500",
                    color: "#2874f0",
                  }}
                />
              )}
            </div>
            <div className="fullAddress">
              {adr.address} <br />
              {/* {""} */}
              {`${adr.state}-${adr.pinCode}`}
            </div>
            {adr.selected && (
              <MaterialButton
                title="DELIVERY HERE"
                onClick={() => confirmDeliveryAddress(adr)}
                style={{
                  width: "250px",
                  margin: "10px 0",
                }}
              />
            )}
          </div>
        ) : (
          <AddressForm
            withoutLayout={true}
            onSubmitForm={onAddressSubmit}
            initialData={adr}
            onCancel={() => {}}
          />
        )}
      </div>
    </div>
  );
};

const CheckoutPage = (props) => {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState([]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddressSubmit = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
  };

  const selectAddress = (addr) => {
    //console.log(addr);
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id
        ? { ...adr, selected: true }
        : { ...adr, selected: false }
    );
    setAddress(updatedAddress);
  };

  const confirmDeliveryAddress = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
  };

  const userOrderConfirmation = () => {
    setOrderConfirmation(true);
    setOrderSummary(false);
    setPaymentOption(true);
  };

  const onConfirmOrder = () => {
    const totalAmount = Object.keys(cart.cartItems).reduce(
      (totalPrice, key) => {
        const { price, qty } = cart.cartItems[key];
        return totalPrice + price * qty;
      },
      0
    );
    const items = Object.keys(cart.cartItems).map((key) => ({
      productId: key,
      payablePrice: cart.cartItems[key].price,
      purchasedQty: cart.cartItems[key].qty,
    }));
    const payload = {
      addressId: selectedAddress._id,
      totalAmount,
      items,
      paymentStatus: "pending",
      paymentType: "cod",
    };
    console.log(payload);
    dispatch(addOrder(payload));
    setConfirmOrder(true);
  };

  const enableAddressEditForm = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
    );
    setAddress(updatedAddress);
  };

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
    auth.authenticate && dispatch(getCartItems());
  }, [auth.authenticate]);

  useEffect(() => {
    const address = user.address.map((adr) => ({
      ...adr,
      selected: false,
      edit: false,
    }));
    setAddress(address);
  }, [user.address]);

  if (confirmOrder) {
    return (
      <Layout>
        <Card>
          <body>
            {/* start */}
            <div class="bg-indigo-900 text-center py-2 lg:px-4 successmsg">
              <div
                class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                role="alert"
              >
                <span class="flex rounded-full bg-yellow-700 uppercase px-2 py-1 text-xs font-bold mr-3">
                  <TiTick />
                </span>
                <span class="font-semibold mr-2 text-left flex-auto">
                  Order Completed Successfully..!! Thank You..!!
                </span>
                <svg
                  class="fill-current opacity-75 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
            </div>
            {/* end */}
            <div class="container ">
              <div class="snow"></div>
              <div class="tree1"></div>
              <div class="tree2"></div>
              <div class="house">
                <div class="roof1">
                  <div class="b1"></div>
                  <div class="b2"></div>
                </div>
                <div class="wall1">
                  <div class="w3">
                    <div class="window1">
                      <div class="glass1"></div>
                    </div>
                  </div>
                </div>
                <div class="wall2">
                  <div class="light">
                    <div class="w1">
                      <div class="window">
                        <div class="glass"></div>
                      </div>
                    </div>
                    <div class="w2">
                      <div class="window">
                        <div class="glass"></div>
                      </div>
                    </div>
                  </div>
                  <div class="door">
                    <div class="handle"></div>
                  </div>
                  <div class="snw1"></div>
                  <div class="snw2"></div>
                </div>
                <div class="wall3">
                  <div class="b3"></div>
                  <div class="b4"></div>
                  <div class="chimney">
                    <div class="top">
                      <div class="smoke">
                        <div class="s1"></div>
                        <div class="s2"></div>
                        <div class="s3"></div>
                      </div>
                      <div class="shne1"></div>
                      <div class="shne2"></div>
                    </div>
                  </div>
                  <div class="sn">
                    <div class="dr1"></div>
                    <div class="dr2"></div>
                    <div class="dr3"></div>
                  </div>
                  <div class="sn1">
                    <div class="dr4"></div>
                  </div>
                  <div class="sh1"></div>
                  <div class="sh2"></div>
                  <div class="sh3"></div>
                  <div class="sh4"></div>
                  <div class="sh5"></div>
                </div>
              </div>
              <div class="snowfall"></div>
              <div class="cover"></div>
              <div class="bottom">
                <div class="bt1"></div>
                <div class="bt2"></div>
              </div>
              <div class="fence">
                <div class="fn1">
                  <div class="screw"></div>
                </div>
                <div class="fn2">
                  <div class="screw"></div>
                </div>
                <div class="fn3">
                  <div class="screw"></div>
                </div>
                <div class="stck"></div>
              </div>
            </div>
          </body>
        </Card>
      </Layout>
    );
  }
  ////////
  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <div className="checkoutContainer">
          {/* check if user logged in or not */}
          <CheckoutStep
            stepNumber={"1"}
            title={"LOGIN"}
            active={!auth.authenticate}
            body={
              auth.authenticate ? (
                <div className="loggedInId">
                  <span style={{ fontWeight: 500 }}>{auth.user.firstName}</span>
                  <span style={{ margin: "0 5px" }}>{auth.user.email}</span>
                </div>
              ) : (
                <div>
                  <MaterialInput label="Email" />
                </div>
              )
            }
          />
          <CheckoutStep
            stepNumber={"2"}
            title={"DELIVERY ADDRESS"}
            active={!confirmAddress && auth.authenticate}
            body={
              <>
                {confirmAddress ? (
                  <div className="stepCompleted">
                    {`${selectedAddress.name} ${selectedAddress.address} - ${selectedAddress.pinCode}`}
                  </div>
                ) : (
                  address.map((adr) => (
                    <Address
                      selectAddress={selectAddress}
                      enableAddressEditForm={enableAddressEditForm}
                      confirmDeliveryAddress={confirmDeliveryAddress}
                      onAddressSubmit={onAddressSubmit}
                      adr={adr}
                    />
                  ))
                )}
              </>
            }
          />

          {/* AddressForm */}
          {confirmAddress ? null : newAddress ? (
            <AddressForm onSubmitForm={onAddressSubmit} onCancel={() => {}} />
          ) : auth.authenticate ? (
            <CheckoutStep
              stepNumber={"+"}
              title={"ADD NEW ADDRESS"}
              active={false}
              onClick={() => setNewAddress(true)}
            />
          ) : null}

          <CheckoutStep
            stepNumber={"3"}
            title={"ORDER SUMMARY"}
            active={orderSummary}
            body={
              orderSummary ? (
                <CartPage onlyCartItems={true} />
              ) : orderConfirmation ? (
                <div className="stepCompleted">
                  {Object.keys(cart.cartItems).length} items
                </div>
              ) : null
            }
          />
          {orderSummary && (
            <Card
              style={{
                margin: "10px 0",
              }}
            >
              <div
                className="flexRow sb"
                style={{
                  padding: "20px",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "12px" }}>
                  Order confirmation email will be sent to
                  <strong>
                    {""} {auth.user.email}
                  </strong>
                </p>
                <MaterialButton
                  title="CONTINUE"
                  onClick={userOrderConfirmation}
                  style={{
                    width: "200px",
                  }}
                />
              </div>
            </Card>
          )}

          <CheckoutStep
            stepNumber={"4"}
            title={"PAYMENT OPTION"}
            active={paymentOption}
            body={
              paymentOption && (
                <div>
                  <div
                    className="flexRow"
                    style={{
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <input type="radio" name="paymentOption" value="cod" />
                    <div>Cash on delivery</div>
                  </div>
                  <MaterialButton
                    title="CONFIRM ORDER"
                    onClick={onConfirmOrder}
                    style={{ width: "200px", margin: "0 0 20px 20px" }}
                  />
                </div>
              )
            }
          />
        </div>
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

export default CheckoutPage;
