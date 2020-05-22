import React from "react";

import {
  Row,
  Col,
  Container
} from "reactstrap";

function Price() {
    return (

      <div id="price" className="section text-center">
         <Container>
           <Row>
             <Col className="ml-auto mr-auto" md="12">
              <h2 className="title">Price</h2>
              <br/>
                  <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information.
                  </h5>
                  <br/>
                <table class="table">
                  <thead>
                      <tr>
                          <th class="text-center">#</th>
                          <th>Area</th>
                          <th>Description</th>
                          <th>type</th>
                          <th class="text-right">Price</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td class="text-center">1</td>
                          <td>Example</td>
                          <td>This is the paragraph where you can write more details about
                          your product.</td>
                          <td>Basic</td>
                          <td class="text-right">&#36; 92,144</td>
                      </tr>
                      <tr>
                          <td class="text-center">2</td>
                          <td>Example</td>
                          <td>This is the paragraph where you can write more details</td>
                          <td>Basic</td>
                          <td class="text-right">&#36; 99,225</td>
                      </tr>
                      <tr>
                          <td class="text-center">3</td>
                          <td>Example</td>
                          <td>This is the paragraph where you can write more details about
                          your product.</td>
                          <td>Basic</td>
                          <td class="text-right">&#36; 89,241</td>
                      </tr>
                      <tr>
                          <td class="text-center">4</td>
                          <td>Example</td>
                          <td>This is the paragraph where you can write more details about
                          your product.</td>
                          <td>Basic</td>
                          <td class="text-right">&#36; 92,144</td>
                      </tr>
                      <tr>
                          <td class="text-center">5</td>
                          <td>Example</td>
                          <td>This is the paragraph where you can write more details about
                          </td>
                          <td>Basic</td>
                          <td class="text-right">&#36; 92,144</td>
                      </tr>
                      <tr>
                          <td class="text-center">6</td>
                          <td>Example</td>
                          <td>This is the paragraph where you can write more details about
                          your product.</td>
                          <td>Basic</td>
                          <td class="text-right">&#36; 92,144</td>
                      </tr>
                  </tbody>
                </table>
                </Col>
            </Row>    
        </Container>
    </div>
    );
}

export default  Price;