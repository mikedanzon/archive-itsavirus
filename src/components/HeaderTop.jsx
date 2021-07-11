import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function HeaderTop() {
  const featurePending = () => {
    toast.warn('This feature is still not available!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="htop-background">
      <div className="htop-wrapper">
        <div className="htop-left">
          <Link to="/">Home</Link>
        </div>
        <div className="htop-middle">
          <MdLocalShipping size={20} style={{ marginBottom: '-5px' }} /> FREE
          SHIPPING OVER $100 PURCHASE
        </div>
        <div className="htop-right">
          <div className="right-menu-1" onClick={featurePending}>
            Shipping
          </div>
          <div className="right-menu-2" onClick={featurePending}>
            FAQ
          </div>
          <div className="right-menu-3" onClick={featurePending}>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
