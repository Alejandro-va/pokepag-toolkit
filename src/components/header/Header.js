import React from "react";
import ScrollButton from "../scrollButton/ScrollButton";
import { Link } from "react-router-dom";
import logo from "../../image/pngwing.com.png";
import "./Header.scss";

const Header = () => {
  const [scrollHeight, setScrollHeight] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset; //obtiene el scroll en y
    setScrollHeight(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <ScrollButton isScrolling={scrollHeight} />
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
