import React from "react";
import "./checkout.css";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <p className="checkout"> Gracias por tu compra</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'rgb(73, 73, 73)' }}>Volver al Inicio</Link>
    </div>
  );
}

export default Checkout;
