import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import cartContext from "../../storage/CartContext";
import Button from "../Button/Button";
import "./itemdetail.css";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);
  const { cart, addToCart, removeItem } = useContext(cartContext);

  let itemInCart = cart.find((item) => product.id === item.id);
  let stock = product.stock;
  if (itemInCart) stock -= itemInCart.count;

  function onAddToCart(count) {
    const itemForCart = {
      ...product,
      count,
    };

    addToCart(itemForCart);
    setIsInCart(true);
  }

  return (
    <div className="item-detail">
      <div className="item-detail_img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="item-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      {!isInCart ? (
        <ItemCount
          text="Agregar al carrito"
          onAddToCart={onAddToCart}
          stock={product.stock}
        />
      ) : (
        <div className="menu-after-added">
          <span className="agregado-text"> Agregado al carrito</span>
          <Link to="/cart">
            <Button>Ir al Carrito</Button>
          </Link>
          <Link to="/">
            <Button>Volver al catalogo</Button>
          </Link>
            <Button onClick={() => {removeItem(product.id); setIsInCart(false);}}>
            Quitar del carrito
            </Button>

        </div>
        
      )}
      </div>
    </div>
  );
}

export default ItemDetail;
