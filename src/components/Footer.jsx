// import { Container } from "react-bootstrap"

// const Footer = () => {
//     return (
//         <Container fluid className="bg-dark p-5 text-white text-center">

//             <h3>We provide best products</h3>
//             <p>All rights reserved - <b> Substring Technologies</b></p>

//         </Container>
//     )
// }

// export default Footer


import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-white pt-5 pb-3 mt-5">
      <Row className="px-5">
        {/* Company Info */}
        <Col md={3} sm={6} className="mb-4">
          <h5 className="text-uppercase mb-3">ElectroStore</h5>
          <p>
            At ElectroStore, we are committed to delivering the best
            products with unmatched quality and customer satisfaction. Shop from
            the latest collections and discover a better shopping experience.
          </p>
        </Col>

        {/* Customer Service */}
        <Col md={3} sm={6} className="mb-4">
          <h5 className="text-uppercase mb-3">Customer Service</h5>
          <ul className="list-unstyled">
            <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
            <li><a href="/faq" className="text-white text-decoration-none">FAQs</a></li>
            <li><a href="/return" className="text-white text-decoration-none">Returns & Refunds</a></li>
            <li><a href="/shipping" className="text-white text-decoration-none">Shipping Info</a></li>
            <li><a href="/order-track" className="text-white text-decoration-none">Track Order</a></li>
          </ul>
        </Col>

        {/* Quick Links */}
        <Col md={3} sm={6} className="mb-4">
          <h5 className="text-uppercase mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="/store" className="text-white text-decoration-none">Shop</a></li>
            <li><a href="/store" className="text-white text-decoration-none">Categories</a></li>
            <li><a href="/deals" className="text-white text-decoration-none">Deals</a></li>
            <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
            <li><a href="/termcon" className="text-white text-decoration-none">Terms & Conditions</a></li>
          </ul>
        </Col>

        {/* Newsletter & Social */}
        <Col md={3} sm={6} className="mb-4">
          <h5 className="text-uppercase mb-3">Join Our Newsletter</h5>
          <Form>
            <Form.Group className="mb-3 " controlId="newsletterEmail">
              <Form.Control className="text-white" type="email" placeholder="Enter your email" />
            </Form.Group>
            <Button variant="primary" type="submit" size="sm">
              Subscribe
            </Button>
          </Form>
          <div className="mt-4">
            <h6>Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5"><FaFacebookF /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
              <a href="#" className="text-white fs-5"><FaTwitter /></a>
              <a href="#" className="text-white fs-5"><FaYoutube /></a>
            </div>
          </div>
        </Col>
      </Row>

      <hr className="bg-white mx-5" />

      <Row className="px-5 text-center text-md-start">
        <Col md={6}>
          <p className="mb-0">© {new Date().getFullYear()} <strong>ElectroStore</strong>. All rights reserved.</p>
        </Col>
        <Col md={6} className="text-md-end">
          <span className="me-2">We accept:</span>
          <FaCcVisa size={28} className="me-2" />
          <FaCcMastercard size={28} className="me-2" />
          <FaCcPaypal size={28} />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
