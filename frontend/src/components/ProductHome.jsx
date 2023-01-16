import axios from "axios";
import {
  faEye,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Store } from "../Store";
import Quick from "../components/Quick";

const ProductHome = ({ item }) => {
  const [open, setOpen] = useState(false);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, wish } = state;
  const addToCartHandler = async () => {
    console.log("Home page cart");
    const existItem = cart.cartItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity + 1 : 1; //if existItem than quantity + 1 in cart if not than 1

    //this you can put but you don’t have to
    const { data } = await axios.get(`/api/products/${item.slug}`);
    console.log(data)
    if (data.countInStock < quantity) {
      toast.warning("Product is Out of Stock", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });

      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
    toast.info("Product added to Cart", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };

  const addToWishHandler = () => {
    const existItem = wish.wishItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity : 1;

    //const { data } = await axios.get(`/api/products/slug/${product.slug}`);
    if (existItem) {
      toast.warning("Product already in wishlist", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });

      return;
    }

    ctxDispatch({
      type: "WISH_ADD_ITEM",
      payload: { ...item, quantity },
    });
    toast.info("Product added to Wish List", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };

  return (
    <div class="col hp mb-4">
      <div class="card h-90 shadow-sm card-styling-boundary">
        <Link to={`/product/${item.slug}`}>
          <img src={item.image} class="card-img-top" alt="product.title" />
        </Link>
        <div class="label-top shadow-sm">
          <a class="text-white" href="#">
            {item.brand}
          </a>
        </div>
        <div class="card-body">
          <div class="clearfix mb-2">
            <span class="float-start product-list-title-styling">
              {item.title}
            </span>
          </div>

          <div class="clearfix">
            <span class=" d-block float-start product-list-price-styling">
              Rs {item.price}
            </span>
          </div>
          <div class="d-grid gap-2 my-4">
            <button onClick={addToCartHandler} class="btn btn-primary bold-btn">
              add to cart
            </button>
          </div>
          <div class="clearfix mb-1">
            <span class="float-start">
              <FontAwesomeIcon
                onClick={() => setOpen(true)}
                icon={faEye}
                class="wishlist-icon-styling mr-1"
              />
            </span>

            <span class="float-end">
              <FontAwesomeIcon
                onClick={addToWishHandler}
                icon={faHeart}
                class="wishlist-icon-styling mr-1"
              />
            </span>
          </div>
        </div>
      </div>
      {open && <Quick item={item} />}
    </div>
  );

  //   return (
  //     <div className='hp-card'>
  //         <div className="card-header">
  //             <Link to={`/product/${item.slug}`}>
  //               <img src={item.image} alt={item.title} />
  //             </Link>
  //         </div>
  //         <div className="card-body">
  //             <h3 className="title">{item.title}</h3>
  //             <span>${item.price}</span>
  //         </div>
  //         <div className="card-footer">
  //             <button onClick={() => setOpen(true)} className="eye"><FontAwesomeIcon icon={faEye} /></button>
  //             <button><FontAwesomeIcon icon={faHeart} onClick={addToWishHandler} /></button>
  //             {item.countInStock === 0 ? (
  //                   <button className='cart cart-out' disabled >Out of stock</button>
  //                 ) : (
  //                   <button><FontAwesomeIcon icon={faShoppingBag} onClick={addToCartHandler}/></button>)
  //             }
  //         </div>
  //         {open && <Quick item={item} />}
  //     </div>
  //   )
  //
};

export default ProductHome;
