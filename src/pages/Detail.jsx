import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { URL_API } from '../helper/url';
import { BsArrowRight } from 'react-icons/bs';
import { MdPlayCircleOutline, MdLocalShipping } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import HeaderTop from '../components/HeaderTop';
import Cover from '../assets/img/shoes.png';
import Top from '../assets/img/shoes-top.png';
import Side from '../assets/img/shoes-side.png';
import Back from '../assets/img/shoes-back.png';
import Zoom from '../assets/img/shoes-zoom.png';

function Detail() {
  const { id } = useParams();
  const [shoes, setShoes] = useState([]);
  const [image, setImage] = useState(Cover);
  const [shoesSize, setShoesSize] = useState(0);
  const [shoesColor, setShoesColor] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let res = await axios.get(`${URL_API}`);
      console.log(res.data.shoes[id]);
      setShoes(res.data.shoes[id]);
    } catch (err) {
      console.log(err);
    }
  };

  const shoesSizeMap = () => {
    return shoes.sizes.map((val, index) => {
      return (
        <div
          className="shoes-sizes"
          key={index}
          onClick={() => setShoesSize(val)}
        >
          {val}
        </div>
      );
    });
  };

  const shoesColorMap = () => {
    return shoes.colors.map((val, index) => {
      return (
        <div
          className="shoes-color"
          key={index}
          onClick={() => setShoesColor(val.color_hash)}
          style={{ background: `${val.color_hash}` }}
        ></div>
      );
    });
  };

  const onClickAddCart = () => {
    if (!shoesSize || !shoesColor) {
      return console.log('Please pick your shoes size & shoes color first!');
    }
    dispatch({
      type: 'ADD_CART',
      payload: {
        name: shoes.name,
        size: shoesSize,
        color: shoesColor,
        price: shoes.price,
        qty: 1,
        total: shoes.price,
      },
    });
  };

  return (
    <>
      <HeaderTop />
      <Header />
      <div className="detail-wrapper">
        <div className="d-shoes">
          <div className="d-shoes-left">
            <div className="d-shoes-cover">
              <img src={image} alt="shoes-preview" />
            </div>
            <div className="d-shoes-images">
              <div className="s-images" onClick={() => setImage(Top)}>
                <img src={Top} alt="shoes-colls" />
              </div>
              <div className="s-images" onClick={() => setImage(Side)}>
                <img src={Side} alt="shoes-colls" />
              </div>
              <div className="s-images" onClick={() => setImage(Back)}>
                <img src={Back} alt="shoes-colls" />
              </div>
              <div className="s-images" onClick={() => setImage(Zoom)}>
                <img src={Zoom} alt="shoes-colls" />
              </div>
            </div>
          </div>
          <div className="d-shoes-right">
            <div className="d-right-category">{shoes.category}</div>
            <div className="d-right-name">{shoes.name}</div>
            <div className="d-right-desc">{shoes.description}</div>
            <div className="d-right-video">
              <div className="d-right-video-player">
                <a href={shoes.video} target="_blank">
                  <MdPlayCircleOutline
                    size={40}
                    style={{ marginTop: '-12px' }}
                  />
                </a>
              </div>
              <div className="d-right-video-text">PLAY VIDEO</div>
            </div>
            <div className="d-right-size">
              <div className="d-right-size-text">SELECT SIZE (US)</div>
              {shoes.length !== 0 && (
                <div className="d-right-size-select">{shoesSizeMap()}</div>
              )}
            </div>
            <div className="d-right-color">
              <div className="d-right-color-text">SELECT COLOR</div>
              {shoes.length !== 0 && (
                <div className="d-right-color-select">{shoesColorMap()}</div>
              )}
            </div>
          </div>
        </div>
        <div className="d-footer">
          <div className="d-footer-left">
            <MdLocalShipping size={15} style={{ marginBottom: '-3px' }} /> FREE
            SHIPPING OVER $100 PURCHASE
          </div>
          <div className="d-footer-right">
            <button onClick={onClickAddCart}>
              ADD TO BAG - ${shoes.price}{' '}
              <BsArrowRight size={20} style={{ marginBottom: '-5px' }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
