import React, { useState } from "react";
import "../assets/styles/components/Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: ""
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            onChange={handleInput}
            className="input"
            type="text"
            placeholder="Nombre"
          />
          <input
            name="email"
            onChange={handleInput}
            className="input"
            type="text"
            placeholder="Correo"
          />
          <input
            name="password"
            onChange={handleInput}
            className="input"
            type="password"
            placeholder="Contraseña"
          />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
};

export default Register;
