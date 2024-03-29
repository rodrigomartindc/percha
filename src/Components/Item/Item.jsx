import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Button from "../Button/Button";
import Button from '@mui/material/Button';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import "./item.css";

function Item({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  let classButtonFavorite =
    isFavorite === true ? "card-favicon favorite" : "card-favicon";

  let urlDetail = `/detalle/${product.id}`;

  return (
    <div className="card">
      <button onClick={handleFavorite} className={classButtonFavorite}>
        ♥
      </button>
      <div className="card-img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <Link to={urlDetail} style={{ textDecoration: 'none' }}>
        <div className="ver-detalle-title">
        <h5>VER DETALLE</h5>
          <DoubleArrowIcon fontSize="medium"></DoubleArrowIcon>
          
        </div>
      </Link>
    </div>
  );
}

export default Item;