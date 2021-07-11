import React from 'react';
import { CgAdidas, CgProfile } from 'react-icons/cg';
import { BiShoppingBag } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const [menu, setMenu] = useState('new');
  const cart = useSelector((state) => state.cart);

  const featurePending = () => {
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
    <div className="h-wrapper">
      <div className="h-left">
        <Link to="/">
          <CgAdidas size={50} />
        </Link>
      </div>
      <div className="h-middle">
        <div
          className={`middle-menu-1 hover ${menu === 'new' && 'menu-active'}`}
          onClick={() => {
            setMenu('new');
            featurePending();
          }}
        >
          New Release
        </div>
        <div
          className={`middle-menu-2 hover ${menu === 'men' && 'menu-active'}`}
          onClick={() => {
            setMenu('men');
            featurePending();
          }}
        >
          Men
        </div>
        <div
          className={`middle-menu-3 hover ${menu === 'women' && 'menu-active'}`}
          onClick={() => {
            setMenu('women');
            featurePending();
          }}
        >
          Women
        </div>
        <div
          className={`middle-menu-4 hover ${menu === 'kids' && 'menu-active'}`}
          onClick={() => {
            setMenu('kids');
            featurePending();
          }}
        >
          Kids
        </div>
        <div
          className={`middle-menu-5 hover ${
            menu === 'custom' && 'menu-active'
          }`}
          onClick={() => {
            setMenu('custom');
            featurePending();
          }}
        >
          Customize
        </div>
      </div>
      <div className="h-right">
        <div className="right-icon-1 hover">
          <Link to="/cart">
            <BiShoppingBag size={20} />
            {cart.cart.length ? (
              <span className="cart-popup-header">{cart.cart.length}</span>
            ) : (
              <span></span>
            )}
          </Link>
        </div>
        <div className="right-icon-2 hover">
          <CgProfile size={20} />
        </div>
      </div>
    </div>
  );
}

export default Header;
