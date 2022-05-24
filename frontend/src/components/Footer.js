// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <footer>
//       <Container>
//         <Row>
//           <Col className="text-center py-3">Copyright &copy; MernShop</Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Container } from "react-bootstrap";
import "../footer.css";

const Footer = () => {
  return (
    <Container>
      <footer className="footer-container">
        <div className="footer-icons">
          <a
            href="https://github.com/nilchakraborty"
            aria-label="github account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/nilchakraborty/"
            aria-label="linkedin account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in footer-icon" />
          </a>
        </div>
        <div className="footer-copyright">&copy; MernShop</div>
      </footer>
    </Container>
  );
};

export default Footer;
