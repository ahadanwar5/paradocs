import axios from "axios";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";

import {
  faTruckFast,
  faCartShopping,
  faCreditCard,
  faHeart,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  CardBody,
  CardHeader,
  Table,
  Button,
  Spinner,
  CardFooter,
} from "reactstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { getError } from "../utils";
import { Store } from "../Store";

import "../styles/placeorder.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_REQUEST":
      return { ...state, loading: true };
    case "CREATE_SUCCESS":
      return { ...state, loading: false };
    case "CREATE_FAIL":
      return { ...state, loading: false };
    default:
      return state;
  }
};

const PlaceOrder = () => {
  const navigate = useNavigate();

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  //price
  const roundPrice = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  cart.itemsPrice = roundPrice(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  cart.shippingPrice =
    cart.itemsPrice > 10000 ? roundPrice(0) : roundPrice(100);
  cart.taxPrice = roundPrice(0.05 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: "CREATE_REQUEST" });

      const { data } = await axios.post(
        "/api/orders",
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      ctxDispatch({ type: "CART_CLEAR" });
      dispatch({ type: "CREATE_SUCCESS" });
      localStorage.removeItem("cartItems");
      toast.info("Order has been placed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      navigate(`/order/${data.order._id}`);
    } catch (err) {
      dispatch({ type: "CREATE_FAIL" });
      toast.error(getError(err));
    }
  };
  const removeItemHandler = (item) => {
    ctxDispatch({
      type: "CART_REMOVE_ITEM",
      payload: item,
    });
  };
  return (
    <>
      <Navbar />

      <header>
        <div class="bg-image d-flex justify-content-center align-items-center cart-heading-title">
          <h1 class="text-white cart-heading">Order Summary</h1>
        </div>
      </header>

      <div class="container mt-5 mb-5">
        <section className="container-fluid">
          <h4 class="d-flex justify-content-between mb-3">
            <span class="text-muted order-items-styling">Order Items</span>
          </h4>
          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
                {cart.cartItems.map((cartItem, i) => (
                  <>
                    <div className="items-info">
                      <div className="product-img">
                        <img src={cartItem.image} alt="iamge" />
                      </div>

                      <div className="title">
                        <h2>{cartItem.title}</h2>
                        <p>{cartItem.brand}</p>
                      </div>

                      <div className="quantity">
                        <h3>Price: Rs {cartItem.price}</h3>
                      </div>

                      <div className="quantity">
                        <h3>Quantity: {cartItem.quantity}</h3>
                      </div>

                      <div className="remove-item">
                        <i
                          className="fas fa-trash-alt remove i-style"
                          onClick={() => removeItemHandler(cartItem)}
                        ></i>
                      </div>
                    </div>

                    <hr />
                  </>
                ))}
              </Scrollbars>
            </div>
          </div>
        </section>
      </div>

      <div
        class="container mt-5 mb-5"
        style={{ border: "1px solid rgb(200,201,202)", borderRadius: "10px" }}
      >
        <div class="row mt-4 ml-3 mr-3 mb-4">
          <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Order Total</span>
            </h4>
            <ul class="list-group mb-3 sticky-top">
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0 mr-5">Subtotal</h6>
                </div>
                <span class="text-muted ml-4">Rs {cart.itemsPrice}</span>
              </li>

              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0 mr-5">Shipping</h6>
                </div>
                <span class="text-muted ml-2">Rs {cart.shippingPrice}</span>
              </li>

              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0 mr-5">Tax Price</h6>
                </div>
                <span class="text-muted ml-4">Rs {cart.taxPrice}</span>
              </li>

              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0 mr-4">Total Price</h6>
                </div>
                <span class="text-muted ml-5">Rs {cart.totalPrice}</span>
              </li>
              <button
                type="button"
                class="btn btn-outline-success ml-2 mt-3 account-button-styling"
                style={{ width: "7rem", alignSelf: "flex-end" }}
                data-mdb-ripple-color="dark"
                onClick={placeOrderHandler}
              >
                Place Order
              </button>
            </ul>
          </div>

          <div class="col-md-8 order-md-1">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Shipping Details</span>
            </h4>

            <div class="row">
              <hr class="col-md-11" />

              <span class="shipping-details-styling mb-3">
                <span class="shipping-details-styling-title"> Name: </span>
                {userInfo.name}
              </span>

              <span class="shipping-details-styling mb-3">
                <span class="shipping-details-styling-title"> Email: </span>{" "}
                {userInfo.email}
              </span>

              <hr class="col-md-11" />

              <span class="shipping-details-styling mb-3">
                <span class="shipping-details-styling-title"> Address: </span>{" "}
                {cart.shippingAddress.address}
              </span>

              <br />

              <span class="shipping-details-styling mb-3">
                <span class="shipping-details-styling-title"> City: </span>{" "}
                {cart.shippingAddress.city}
              </span>

              <br />

              <span class="shipping-details-styling mb-3">
                <span class="shipping-details-styling-title">
                  {" "}
                  Postal Code:{" "}
                </span>{" "}
                {cart.shippingAddress.postalCode}
              </span>

              <br />

              <span class="shipping-details-styling mb-3">
                <span class="shipping-details-styling-title"> Country: </span>{" "}
                {cart.shippingAddress.country}
              </span>

              <br />

              <span class="shipping-details-styling mb-3">
                <span class="shipping-details-styling-title">
                  {" "}
                  Payment Method:{" "}
                </span>{" "}
                Cash on Delivery
              </span>

              <br />
              <hr class="col-md-11" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlaceOrder;
