import React, { useEffect, useState } from "react";
import { getImageURL } from "./firebase";
import "./ProductCard.css";
const Card = (props) => {
  const [url, setImageURL] = useState();
  const getURL = async () => {
    const imageUrl = await getImageURL(props.image);
    setImageURL(imageUrl);
    console.log(imageUrl);
  };
  
  useEffect(() => {
    getURL();
  }, []);
  return (
    <>
      <div className="product-card ">
        <div className="image-wrapper">
          <img className="product-image" src={url} alt="product" />
        </div>
        <div className="detail">
          <h3 className="title">{props.name}</h3>
          <p className="price">{props.price}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
