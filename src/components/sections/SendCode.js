import React from "react";

import {
    Button,
    Row,
    Col,
    Container
  } from "reactstrap";

function SendCode() {
  
    return (
      <div id="code" className="section landing-section">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Recive Your Code</h2>
                <Row>
                    <Col className="ml-auto mr-auto" md="8">
                    <br />
                    <br />
                    <br />
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
                <br/>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <Button className="btn-fill" color="danger" size="lg">
                    Send
                  </Button>
                </Col>
              </Row>
           
          </Col>
        </Row>
      </Container>
    </div>
    );
}

export default SendCode;