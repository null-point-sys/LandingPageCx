
import React from "react";

import { Button, Container, Modal  } from "reactstrap";

function LandingPageHeader() {

  let pageHeader = React.createRef();
  const [smallModal, setSmallModal] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/HeaderCX2.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Landing Page COGNOX</h1>
            <h3>It is a long established fact that a reade</h3>
            <h5>Content here, content here', making it look like readable English. Many</h5>
            <br/>
           
              <Button
                padding= "12px"
                className="btn-round"
                color="neutral"
                target="_blank"
                outline
                onClick={() => setSmallModal(true)}
              >
                Phone
              </Button>
              <Modal
                isOpen={smallModal}
                className="modal-sm"
                modalClassName="bd-example-modal-sm"
                toggle={() => setSmallModal(false)}
              >
                <div className="modal-header">
                  <h4 className="modal-title" id="mySmallModalLabel">
                    Phone Number<br/>
                    +57 3010000000
                  </h4>
                  <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => setSmallModal(false)}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                </div>
                <div className="modal-body">...</div>
              </Modal>
              {'  '}  {' '}
              <Button className="btn-round" color="neutral" type="button" outline
                 href='https://wa.me/573124796067'
              >
                 Whatsapp
              </Button>
            
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
