import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Store } from "../Store";
import "../styles/wish.css";

const Wish = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const {
    wish: { wishItems },
  } = state;

  const removeItemHandler = (item) => {
    ctxDispatch({
      type: "WISH_REMOVE_ITEM",
      payload: item,
    });
  };

  let WishView;
  if (wishItems.length === 0) {
    WishView = (
      <>
        <section className="main-cart-section body-style">
          <p className="total-items">
          Wish List is empty.
          </p>
          
        </section>
        <Footer />
      </>
    );
  } else {
    WishView = (
      <>
       <section className="main-cart-section body-style2">
          <p className="total-items2">
            you have{" "}
            <span className="total-items2-count">{wishItems.length} </span> items
            in your wish list
          </p>
          
        </section>
    
      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col">
              <div className="cart-items">
                {wishItems.map((item) => (
                  <div className="card" key={item._id}>
                    <div className="clearfix row wish-card">
                      <div className="wish-i col-md-5">
                        <Link to={`/product/${item.slug}`}>
                          <img src={item.image} alt={item.title} />
                        </Link>
                      </div>
                      <div className="col-md-3 align-self-center">
                        <text className="wish-title">{item.title}</text>
                      </div>
                      <div className="row col-4">
                        <div className="col align-self-center">
                          <text className="wish-price">
                            Price: Rs {item.price}
                          </text>
                        </div>
                        <div className="col align-self-center trashdiv">
                          <span class="float-center">
                            <FontAwesomeIcon
                              onClick={() => removeItemHandler(item)}
                              icon={faTrashAlt}
                              class="wish-trash mr-1"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <header>
        <div class="bg-image d-flex justify-content-center align-items-center cart-heading-title">
          <h1 class="text-white cart-heading">Wish List</h1>
        </div>
      </header>
      {WishView}
    </>
  );
};

export default Wish;
