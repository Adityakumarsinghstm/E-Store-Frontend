// src/pages/AboutPage.jsx

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaShippingFast, FaHeadset, FaLock, FaSmile } from "react-icons/fa";
import teamImage from "../assets/teams.jpeg"; // Replace with actual team image
import missionImage from "../assets/mission.png"; // Replace with actual image

const AboutPage = () => {
  return (
    <Container className="p-4">
      {/* Our Story */}
      <section className="my-5 text-center">
        <h2 className="mb-3">Our Story</h2>
        <p className="text-muted w-75 mx-auto">
          Founded with a passion for technology and a mission to bring the best
          products to your doorstep, Electro Store is your one-stop online shop
          for premium electronics. Since our inception, we've served thousands
          of happy customers across the nation.
        </p>
      </section>

      {/* Our Mission */}
      <section className="my-5">
  <Row className="align-items-center g-4"> {/* g-4 adds gutter spacing */}
    <Col md={6}>
      <img
        src={missionImage}
        alt="Our Mission"
        className="img-fluid rounded w-100"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
    </Col>
    <Col
      md={6}
      className="d-flex flex-column justify-content-center text-center px-4"
    >
      <h3 className="mb-3 fw-bold">Our Mission</h3>
      <p>
        Our goal is simple: To empower you with high-quality, affordable,
        and reliable gadgets that enhance your lifestyle. We work with top
        brands and provide world-class customer support to ensure your
        satisfaction.
      </p>
    </Col>
  </Row>
</section>


      {/* Why Choose Us */}
      <section className="my-5 text-center">
  <h2 className="mb-4">Why Choose Us?</h2>
  <Row className="g-4">
    {[ 
      { icon: <FaShippingFast size={40} className="text-primary mb-3" />, title: "Fast Delivery", desc: "Swift and safe delivery at your doorstep." },
      { icon: <FaHeadset size={40} className="text-success mb-3" />, title: "24/7 Support", desc: "Customer-first approach with round-the-clock help." },
      { icon: <FaLock size={40} className="text-danger mb-3" />, title: "Secure Payments", desc: "100% safe and encrypted payment process." },
      { icon: <FaSmile size={40} className="text-warning mb-3" />, title: "Customer Satisfaction", desc: "Thousands of happy shoppers trust us." }
    ].map((item, index) => (
      <Col key={index} md={3} sm={6}>
        <Card className="h-100 text-center shadow-sm">
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            {item.icon}
            <h5>{item.title}</h5>
            <p className="text-muted">{item.desc}</p>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</section>

      {/* Our Team */}
      <section className="my-5 text-center">
        <h2 className="mb-4">Meet Our Team</h2>
        <img src={teamImage} alt="Our Team" className="img-fluid rounded shadow-sm" />
        <p className="text-muted mt-3 w-75 mx-auto">
          A passionate group of developers, designers, and marketers working
          towards one mission — making your online shopping smooth and joyful.
        </p>
      </section>

      {/* Call to Action */}
      <section className="my-5 text-center">
        <h4>Ready to explore?</h4>
        <p>Check out our latest products and make your first purchase today!</p>
        <Button variant="primary" size="lg" href="/store">Shop Now</Button>
      </section>
    </Container>
  );
};

export default AboutPage;
