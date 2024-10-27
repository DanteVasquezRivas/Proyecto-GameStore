import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const products = [
  { id: 1, 
    name: "Pokémon Púrpura", 
    description: "Juego Pokémon Púrpura para Nintendo Switch", 
    image: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/31/latest/20220601144858/Car%C3%A1tula_Pok%C3%A9mon_P%C3%BArpura.png/260px-Car%C3%A1tula_Pok%C3%A9mon_P%C3%BArpura.png",
    price: 64990,
  },
  {
    id: 2,
    name: "Pokémon Leyendas Arceus",
    description: "Pokémon Leyendas Arceus para Nintendo Switch",
    image: "https://m.media-amazon.com/images/I/71bhNf8QiOS._SL1500_.jpg",
    price: 64990,
  },
  {
    id: 3,
    name: "Pokémon mundo misterioso Equipo de rescate DX",
    description: "Pokémon mundo misterioso Equipo de rescate DX para Nintendo Switch",
    image: "https://http2.mlstatic.com/D_NQ_NP_705162-MLC45324835481_032021-O.webp",
    price: 64990,
  },
  // Agregar más productos
];

const Products = () => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
