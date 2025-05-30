import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import CartContext from "../context/CartContext";
import UserContext from "../context/UserContext";
import logo from "./../assets/logo.png";
import { useNavigate } from 'react-router-dom';





const CustomNavbar = () => {
    const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const doLogout = () => {
    userContext.logout();
  };
  return (
    <Navbar
      className="bg-navbar-color"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img alt="logo" src={logo} height={25} width={25} />

          <span className="ms-1 mt-1">ElectroStore</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={NavLink} to="/services">
              Features
            </Nav.Link>

            {/* <NavDropdown title="Categories" id="collasible-nav-dropdown">

                            <NavDropdown.Item href="#action/3.1">Branded Phones</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Smart TVs
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Laptops</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                More
                            </NavDropdown.Item>
                        </NavDropdown> */}

            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/store">
              Store
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              Cart{" "}
              {userContext.isLogin && cart && "(" + cart.items.length + ")"}{" "}
            </Nav.Link>

            {userContext.isLogin ? (
              <>
                {userContext.isAdminUser && (
                  <>
                    <Nav.Link as={NavLink} to="/admin/home">
                      AdminDashboard
                    </Nav.Link>
                  </>
                )}
                <Nav.Link
                  as={NavLink}
                  to={`/users/profile/${userContext.userData.user.userId}`}
                >
                  {userContext.userData.user.email}
                </Nav.Link>
                <Nav.Link as={NavLink} to="/users/orders">
                  Orders
                </Nav.Link>
                <Nav.Link onClick={doLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>

          <div className="d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
  <button
    onClick={() => navigate('/chatBot')}
    className="d-flex align-items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white fw-semibold rounded-4 border-0 shadow-sm"
  >
    Take AI Assistant
    <svg
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 16 16"
      style={{ transform: 'rotate(-45deg)' }}
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793L9.146 3.354a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
      />
    </svg>
  </button>
</div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
