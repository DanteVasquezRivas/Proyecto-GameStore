import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

//to para definir la ruta en Home y Children el texto del boton
const ButtonProducts = ({ to, children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user) {
      navigate(to);
    } else {
      navigate(to);
    }
  };

  return <Button variant="primary" onClick={handleClick}>{children}</Button>;
};

export default ButtonProducts;
