
import React from "react";

import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="http://www.cognox.com/"
                >
                  Landing Page CX
                </a>
              </li>
              <li>
                <a
                   href="https://www.cognox.com"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.cognox.com"
                >
                  License
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, Powered  By {" "}
              <i className="fa fa-heart heart" /> Cognox
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
