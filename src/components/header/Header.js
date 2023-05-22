import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/pngwing.com.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
/*     <Navbar
      expand="lg"
      sticky="top"
      className="mb-3"
      style={{ background: "#ffe100" }}
    >
      <Container>
        <Navbar.Brand to="/" as={Link}>
          <img src={logo} alt="" />
        </Navbar.Brand>
      </Container>
    </Navbar> */
