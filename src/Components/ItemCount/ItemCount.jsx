import React, { useState } from "react";
// import Button from "../Button/Button";
import Button from '@mui/material/Button';
import "./itemcount.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function ItemCount({ stock, onAddToCart, text }) {
  const [count, setCount] = useState(1);

  function handleAdd(evt) {
    console.log(evt);
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract(evt) {
    console.log(evt);
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <RemoveCircleIcon style={{ fontSize: 30 }} onClick={handleSubstract}>
        </RemoveCircleIcon>
        <span>{count}</span>
        <AddCircleIcon style={{ fontSize: 30 }} onClick={handleAdd}>
        </AddCircleIcon>
      </div>
      <div className="itemcount_btns">
        <Button style={{ backgroundColor: '#3c3c3c' }} variant="contained" onClick={() => onAddToCart(count)}>Add to Cart</Button>
      </div>
    </div>
  );
}

export default ItemCount;