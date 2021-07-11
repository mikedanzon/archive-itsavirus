import React, { useState } from 'react';
import Header from '../components/Header';
import HeaderTop from '../components/HeaderTop';
import { BiShoppingBag } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import Shoes from '../assets/img/shoes.png';
import { toast } from 'react-toastify';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const onClearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  const cartMapRender = () => {
    return cart.cart.map((val, index) => {
      return (
        <div className="c-items" key={index}>
          <div className="c-items-product">
            <div className="c-items-image">
              <img src={Shoes} alt="image-preivew" />
            </div>
            <div className="c-items-etc">
              <div className="c-items-name">{val.name}</div>
              <div className="c-items-size-color">
                <div className="c-items-size">Size: {val.size}</div>
                <div className="c-items-color">
                  <div className="c-items-color-text">Color: </div>
                  <div
                    className="c-items-color-background"
                    style={{ background: `${val.color}` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-items-price">${val.price}</div>
          <div className="c-items-quantity">{val.qty}</div>
          <div className="c-items-total">${val.qty * val.price}</div>
        </div>
      );
    });
  };

  const getTotalPrice = () => {
    let items = cart.cart;
    let total = 0;
    for (var i = 0; i < items.length; i++) {
      total += items[i].price * items[i].qty;
    }
    return total;
  };

  const comingSoon = () => {
    toast.warn('This feature is still under development!', {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <HeaderTop />
      <Header />
      {cart.cart.length ? (
        <div className="cart-wrapper">
          <div className="cart-header">
            Your Bag{' '}
            <BiShoppingBag size={50} style={{ marginBottom: '-6px' }} />
            {cart.cart.length ? (
              <span className="cart-popup">{cart.cart.length}</span>
            ) : (
              <span></span>
            )}
          </div>
          <div className="cart-content">
            <div className="c-header">
              <div className="c-header-product">PRODUCT</div>
              <div className="c-header-price">PRICE</div>
              <div className="c-header-quantity">QUANTITY</div>
              <div className="c-header-total">TOTAL</div>
            </div>
            <div className="c-product">
              {cart.cart.length && cartMapRender()}
            </div>
            <div className="c-clear-cart">
              <button onClick={onClearCart}>CLEAR CART</button>
            </div>
            <div className="c-total">
              <div className="c-total-text">TOTAL</div>
              <div className="c-total-price">${getTotalPrice()}</div>
            </div>
            <div className="c-pay" onClick={comingSoon}>
              <div className="c-pay-text">PAY NOW</div>
              <div className="c-pay-icon">
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-wrapper">
          <div className="cart-header">
            CART IS EMPTY{' '}
            <BiShoppingBag size={50} style={{ marginBottom: '-6px' }} />
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
