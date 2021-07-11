import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_API } from '../helper/url';
import HeaderTop from '../components/HeaderTop';
import Header from '../components/Header';
import Shoes from '../assets/img/shoes.png';
import { Link } from 'react-router-dom';

function Home() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let res = await axios.get(`${URL_API}`);
      setShoes(res.data.shoes);
    } catch (err) {
      console.log(err);
    }
  };

  const shoesMapping = () => {
    return shoes.map((val, index) => {
      return (
        <div key={index} className="home-shoes">
          <Link to={`/detail/${index}`}>
            <div className="shoes-image">
              <img src={Shoes} alt="shoesExample" />
            </div>
          </Link>
          <div className="shoes-text">
            <div className="shoes-name">{val.name}</div>
            <div className="shoes-price">${val.price}</div>
          </div>
          <div className="shoes-category">{val.category}</div>
        </div>
      );
    });
  };

  return (
    <>
      <HeaderTop />
      <Header />
      <div className="home-wrapper">
        <div className="home-header">New Release</div>
        <div className="home-content">{shoesMapping()}</div>
      </div>
    </>
  );
}

export default Home;
