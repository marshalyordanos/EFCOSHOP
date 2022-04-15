import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../Products";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product, i) => (
          <Col sm={12} md={6} lg={4}>
            <Product key={i} product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
