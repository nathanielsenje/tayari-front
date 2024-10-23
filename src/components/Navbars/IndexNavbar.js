import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap";
import "./IndexNavbar.css";
import logo from "../../assets/img/linear-dark.png"; // Make sure this path is correct

function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState("navbar-white");
  const [color, setColor] = useState("navbar-transparent");

  useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 399 || document.body.scrollTop > 399) {
        setNavbarColor("navbar-white navbar-shadow");
      } else if (document.documentElement.scrollTop < 400 || document.body.scrollTop < 400) {
        setNavbarColor("navbar-white");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, []);

  return (
    <Navbar className={`fixed-top ${navbarColor}`} expand="lg" color={color}>
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <img src={logo} alt="HiDoc Logo" height="30" />
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setCollapseOpen(!collapseOpen);
            }}
            aria-expanded={collapseOpen}
          >
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <Collapse isOpen={collapseOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/about" className="nav-link" onClick={() => setCollapseOpen(false)}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/forums" className="nav-link" onClick={() => setCollapseOpen(false)}>
                Forums
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/doctors" className="nav-link" onClick={() => setCollapseOpen(false)}>
                Doctors
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/articles" className="nav-link" onClick={() => setCollapseOpen(false)}>
                Health Articles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" className="nav-link" onClick={() => setCollapseOpen(false)}>
                Get Started
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
