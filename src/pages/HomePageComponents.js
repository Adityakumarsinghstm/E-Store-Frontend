import {
  Card,
  Col,
  Container,
  Row,
  Badge,
  Button,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import defaultProductImage from "../assets/default_product_image.jpg";
import SingleProductCard from "../components/users/SingleProductCard";
// export const trendingProducts = (products) => {
//   return (
//     <Container>
//       <Row>
//         <h3 className="text-center">Trending Products List</h3>
//         {products.map((product) => (
//           <Col md={4}>
//             <SingleProductCard product={product} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };
export const trendingProducts = (products) => {
  if (!Array.isArray(products)) {
    return <div>No products available.</div>;
  }

  return (
    <Container>
      <Row>
        <h3 className="text-center">Trending Products List</h3>
        {products.map((product, index) => (
          <Col md={4} key={index}>
            <SingleProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export const infoWithImageInRightSection = (image, title, text) => {
  return (
    <Container>
      <Row>
        <Col style={{}} className="text-center">
          <h3>{title}</h3>
          <p>{text}</p>
          <Button>Store </Button>
        </Col>

        <Col className="text-center">
          <img src={image} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export const infoWithImageInLeftSection = (image, title, text) => {
  return (
    <Container>
      <Row>
        <Col style={{}} className="text-center">
          <img src={image} alt="" />
        </Col>

        <Col className="text-center">
          <h3>{title}</h3>
          <p>{text}</p>
          <Button>Store </Button>
        </Col>
      </Row>
    </Container>
  );
};

export const contactForm = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 1rem",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          minHeight: "500px",
          backgroundColor: "#fff",
          padding: "3rem 2rem",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
          Contact Us
        </h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "0.5rem", color: "#444" }}>Email address</label>
            <input
              type="email"
              placeholder="Enter email"
              style={{
                padding: "1rem",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <small style={{ marginTop: "0.4rem", color: "#888" }}>
              We'll never share your email with anyone else.
            </small>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "0.5rem", color: "#444" }}>Password</label>
            <input
              type="password"
              placeholder="Password"
              style={{
                padding: "1rem",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input type="checkbox" id="check" />
            <label htmlFor="check" style={{ color: "#333" }}>Check me out</label>
          </div>

          <button
            type="submit"
            style={{
              padding: "1rem",
              borderRadius: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
