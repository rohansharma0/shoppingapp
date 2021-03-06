import React, { useState, useEffect } from "react";

import Axios from "axios";

import { random, commerce } from "faker";
import { Container, Row, Col } from "reactstrap";
import CardItem from "./CardItem";

const apiKey = "Insert_your_key";

const url = "https://api.npoint.io/56046ea505a91686a7ba";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  //   const fetchPhotos = async () => {
  //     const response = await Axios.get(url, {
  //       header: {
  //         Authorization: apiKey,
  //       },
  //     });
  //     console.log(response);
  //   };
  const fetchPhotos = async () => {
    const { data } = await Axios.get(url);

    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CardItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
