import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
        <div className="footer" style={{}}>
          <div className ="container" >
      <Container>
        <Row>
          <Col>
          <br></br>
          <p>AT&T Chief Data Office</p>
            <p>© 2023 AT&T Proprietary (Internal Use Only)</p>
            <p>Please be reminded it is unlawful to trade in securities of AT&T or the securities of another company while in possession of material, nonpublic information acquired in the course of an employment or vendor relationship or otherwise through a confidential relationship. It is also unlawful to pass on such information to another person without an AT&T business-related reason. All of this conduct is typically referred to as "Insider Trading" and can subject a person to criminal and civil penalties, including up to 20 years in prison, disgorgement of profits, and substantial financial penalties.</p>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <p>Please be reminded it is unlawful to trade in securities of AT&T or the securities of another company while in possession of material, nonpublic information acquired in the course of an employment or vendor relationship or otherwise through a confidential relationship. It is also unlawful to pass on such information to another person without an AT&T business-related reason. All of this conduct is typically referred to as "Insider Trading" and can subject a person to criminal and civil penalties, including up to 20 years in prison, disgorgement of profits, and substantial financial penalties.</p>
          </Col>
        </Row> */}
      </Container>
      </div>
      </div>
      </footer>
  );
};

export default Footer;
