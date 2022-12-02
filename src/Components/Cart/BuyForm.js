import React, { useState } from "react";
import InputForm from "./InputForm";

export default function BuyForm(props) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });


    function onInputChange(evt) {
        const inputName = evt.target.name;
        const value = evt.target.value;

        const newUserData = { ...userData };
        newUserData[inputName] = value;
        setUserData(newUserData);
    }

    function onSubmit(evt) {
        evt.preventDefault();
        props.onSubmit(userData);
    }

    return (
        <form onSubmit={onSubmit}>
            <InputForm
                required="true"
                title="Nombre"
                name="name"
                value={userData.name}
                onInputChange={onInputChange}
            />
            <InputForm
                required="true"
                title="Email"
                name="email"
                value={userData.email}
                onInputChange={onInputChange}
            />
            <InputForm
                required="true"
                title="Teléfono"
                name="phone"
                value={userData.phone}
                onInputChange={onInputChange}
            />

            <InputForm
                required="true"
                title="Dirección"
                name="address"
                value={userData.address}
                onInputChange={onInputChange}
            />

            <button onClick={onSubmit}>Finalizar Compra</button>
        </form>
    );
}