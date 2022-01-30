import React, { Component } from "react";

import { Row, Col } from "reactstrap";

import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Daily Essentials</h2>
        <Row className="d-flex justify-content-between">
          {contentData.map((col, i) => (
            <Col key={i} md={4} className="product mb-5">
              <div className="image-cropper">
                <img src={col.image} alt={`Preview of ${col.title}`} className="image-beans" />
                <img src={require('../utils/images/coffee-bag.png')} alt="Product bag icon" className="image-bag" />
              </div>
              <h3>
                <i>{col.title}</i>
              </h3>
              <p className="text-muted">
                {col.description}
              </p>
              <h6>
                {col.price}
              </h6>
              <button className="btn btn-success">Add to cart</button>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Content;
