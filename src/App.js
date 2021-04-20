import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import BuyPage from "./Components/BuyPage";
import { Container, Row, Col } from "reactstrap";
import Cart from "./Components/Cart";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });
    if (isAreadyAdded !== -1) {
      toast("Aread added in cart", {
        type: "error",
      });
      return;
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Order Done!", {
      type: "success",
    });
  };

  const removeInCart = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} removeItem={removeInCart} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
