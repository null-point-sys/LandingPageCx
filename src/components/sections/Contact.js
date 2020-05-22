import React from "react";

import {
    Button,
    Form,
    Input,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Row,
    Col,
    Container
  } from "reactstrap";

function Contact() {
  
    return (
      <div id="contact" className="section landing-section">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Contact</h2>
            <Form className="contact-form">
              <Row>
                <Col md="6">
                  <label>Name</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="text" />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Last Name</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Last Name" type="text" />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <label>Phone</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-mobile" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Phone" type="tel" />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Email</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="text" />
                  </InputGroup>
                </Col>
              </Row>
              <label>Message</label>
              <Input
                placeholder="..."
                type="textarea"
                rows="4"
              />
              <Row>
                <Col className="ml-auto mr-auto" md="4">
                  <Button className="btn-fill" color="danger" size="lg">
                    Send
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    );
}

export default Contact;