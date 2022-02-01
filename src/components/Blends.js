import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Blends from "../utils/blends";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <Row className="d-flex justify-content-between">
          {Blends.map((col, i) => (
            <Col key={i} md={4} className="product mb-5">
              <div className="image-cropper">
                <img src={col.image} alt={`Preview of ${col.title}`} className="image-background" />
                <img src={require('../utils/images/coffee-bag.png')} alt="Product bag icon" className="image-bag" />
              </div>
              <h3 className="title">
                <i>{col.title}</i>
              </h3>
              <p className="text-muted">
                {col.description}
              </p>
              <h5>
                {col.price}
              </h5>
              <button className="btn btn-success">Add to cart</button>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Content;