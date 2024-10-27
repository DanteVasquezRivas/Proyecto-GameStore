import React from "react";
import ButtonProducts from "../components/ButtonProducts.jsx";
import "./Home.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <div className="homeImg">
        <h1>Encuentra aquí tus juegos favoritos</h1>
      </div>
      <br />
      <ButtonProducts variant="primary" className="buttonProducts" to="/products">
        Ver todos los productos
      </ButtonProducts>
    </div>
  );
};
export default Home;
