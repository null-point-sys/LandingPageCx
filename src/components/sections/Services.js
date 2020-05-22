import React from "react";

import {
    Button,
    Row,
    Col,
    Container
  } from "reactstrap";

function Services() {
    return (
      <div id="services" className="section text-center">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title">Services</h2>
            <h5 className="description">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you
                want the user to see more.
            </h5>
            <br />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col md="4">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-album-2" />
              </div>
              <div className="description">
                <h4 className="info-title">Service One</h4>
                <p className="description">
                    It is a long established fact that a reader will be distracted by 
                    the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum
                </p>
                <Button className="btn-link" color="info" href="#pablo">
                  See more
                </Button>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-single-02" />
              </div>
              <div className="description">
                <h4 className="info-title">Service Two</h4>
                <p>
                  Larger, yet dramatically thinner. More powerful, but
                  remarkably power efficient.
                </p>
                <Button className="btn-link" color="info" href="#pablo">
                  See more
                </Button>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-chart-bar-32" />
              </div>
              <div className="description">
                <h4 className="info-title">Service Three</h4>
                <p>
                There are many variations of passages of Lorem Ipsum available, 
                but the majority</p>
                <Button className="btn-link" color="info" href="#pablo">
                  See more
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
    );
}

export default Services;