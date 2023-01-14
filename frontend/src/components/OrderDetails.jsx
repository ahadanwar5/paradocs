import React, { useContext, useEffect, useReducer } from "react";
import Footer from "./Footer";
import Loader from "./Loader";
import Error from "./Error";
import Navbar from "./Navbar";
// import '../styles/orderdetails.css'
import { Store } from "../Store";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getError } from "../utils";
import { Scrollbars } from "react-custom-scrollbars-2";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, order: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

const OrderDetails = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: "",
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };

    if (!userInfo) {
      return navigate("/login");
    }
    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [order, userInfo, orderId, navigate]);

  let orderView;

  if (loading) {
    orderView = <Loader />;
  } else if (error) {
    orderView = <Error message={error} />;
  } else {
    orderView = (
      <>
        <div class="container mt-5 mb-5">
          <section className="container-fluid">
            <h4 class="d-flex justify-content-between mb-3">
              <span class="text-muted order-items-styling">Order Items</span>
            </h4>
            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars>
                  {order.orderItems.map((cartItem, i) => (
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
                  <span class="text-muted ml-4">Rs {order.itemsPrice}</span>
                </li>

                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0 mr-5">Shipping</h6>
                  </div>
                  <span class="text-muted ml-2">Rs {order.shippingPrice}</span>
                </li>

                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0 mr-5">Tax Price</h6>
                  </div>
                  <span class="text-muted ml-4">Rs {order.taxPrice}</span>
                </li>

                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0 mr-4">Total Price</h6>
                  </div>
                  <span class="text-muted ml-5">Rs {order.totalPrice}</span>
                </li>
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
                  {order.shippingAddress.fullName}
                </span>

                <span class="shipping-details-styling mb-3">
                  <span class="shipping-details-styling-title"> Address: </span>{" "}
                  {order.shippingAddress.address}
                </span>
                <span class="shipping-details-styling mb-3">
                  <span class="shipping-details-styling-title"> City: </span>{" "}
                  {order.shippingAddress.city}
                </span>
                <span class="shipping-details-styling mb-3">
                  <span class="shipping-details-styling-title">
                    {" "}
                    Postal Code:{" "}
                  </span>{" "}
                  {order.shippingAddress.postalCode}
                </span>
                <span class="shipping-details-styling mb-3">
                  <span class="shipping-details-styling-title"> Country: </span>{" "}
                  {order.shippingAddress.country}
                </span>

                <hr class="col-md-11" />

                {order.isPaid === false ? (
                  <span class="shipping-details-styling mb-3">
                    <span class="shipping-details-styling-title">
                      {" "}
                      Payment:{" "}
                    </span>{" "}
                    Pending
                  </span>
                ) : (
                  <span class="shipping-details-styling mb-3">
                    <span class="shipping-details-styling-title">
                      {" "}
                      Payment:{" "}
                    </span>{" "}
                    Paid
                  </span>
                )}

                <br />

                {order.isDelivered === false ? (
                  <span class="shipping-details-styling mb-3">
                    <span class="shipping-details-styling-title">
                      {" "}
                      Delivery:{" "}
                    </span>{" "}
                    Pending
                  </span>
                ) : (
                  <span class="shipping-details-styling mb-3">
                    <span class="shipping-details-styling-title">
                      {" "}
                      Delivery:{" "}
                    </span>{" "}
                    Delivered
                  </span>
                )}

                <br />

                <hr class="col-md-11" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <header>
        <div class="bg-image d-flex justify-content-center align-items-center cart-heading-title">
          <h1 class="text-white cart-heading">Order Details</h1>
        </div>
      </header>

{orderView}
      <Footer />
    </>
  );
};

export default OrderDetails;
