import React, { useContext, useEffect, useReducer, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Store } from "../Store";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import "../styles/account.css";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../utils";
import Error from "../components/Error";
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, orders: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

function Account(props) {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: "",
  });

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    toast.success("Sign out successful", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const { data } = await axios.get(
          `/api/orders/mine`,

          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        );
        dispatch({ type: "FETCH_SUCCESS", payload: data });
        console.log(data);
      } catch (error) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  let accountView;

  if (loading) {
    accountView = <Loader />;
  } else if (error) {
    accountView = (
      <>
        <Error message={error} />
        <button
          type="button"
          class="btn btn-outline-success ml-2 mt-3 account-button-styling"
          style={{ width: "6rem" }}
          data-mdb-ripple-color="dark"
          onClick={signoutHandler}
        >
          Sign Out
        </button>
      </>
    );
  } else {
    accountView = (
      <div class="container emp-profile">
        <form method="post">
          <div class="row mb-4">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              {" "}
              <h5 class="profile-name text-left">Name: {userInfo.name}</h5>
              <h6 class="profile-id text-left">User ID: {userInfo._id}</h6>
              <p class="profile-rating text-left">
                Orders: <span>{orders.length}</span>
              </p>
            </div>
            <div class="col-md-2"></div>
          </div>

          <div class="row">
            <div class="col-md-2"></div>

            <div class="col-md-8">
              <div class="profile-head">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Profile
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Orders
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 text-left">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-2">
                      <label>User ID</label>
                    </div>
                    <div class="col-md-3">
                      <p>{userInfo._id}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2">
                      <label>Name</label>
                    </div>
                    <div class="col-md-3">
                      <p>{userInfo.name}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2">
                      <label>Email</label>
                    </div>
                    <div class="col-md-3">
                      <p>{userInfo.email}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2">
                      <label>Phone</label>
                    </div>
                    <div class="col-md-3">
                      <p>{userInfo.contact}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2">
                      <label>Role</label>
                    </div>
                    <div class="col-md-3">
                      <p>Customer</p>
                    </div>
                  </div>

                  <div class="row">
                    <button
                      type="button"
                      class="btn btn-outline-success ml-2 mt-3 account-button-styling"
                      style={{ width: "6rem" }}
                      data-mdb-ripple-color="dark"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <table class="table table-bordered table-hover">
                    <thead class="thead">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order ID</th>
                        <th scope="col">Total Bill</th>
                        <th scope="col">Delivery</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, i) => (
                        <tr
                          onClick={() => {
                            navigate(`/order/${order._id}`);
                          }}
                        >
                          <th scope="row">{i + 1}</th>

                          <td>{order._id}</td>

                          <td>{order.totalPrice}</td>
                          {order.isDelivered ? (
                            <td>Delivered</td>
                          ) : (
                            <td>In Process</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div class="bg-image d-flex justify-content-center align-items-center cart-heading-title">
        <h1 class="text-white cart-heading">User Profile</h1>
      </div>
      {accountView}
      <Footer />
    </>
  );
}

export default Account;
