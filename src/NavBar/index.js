import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Collapse isOpen={isOpen} navbar>
          <NavbarBrand href="http://localhost:3000/">Movies</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <div className="inpttext">
            <input type="text" />
          </div>
          <div className="nav-bar-icon">
            <span className="iconcopre">
              <AiOutlineHeart />
            </span>
            <span className="iconcopre">
              <AiOutlineShoppingCart />
            </span>
            <span className="numecopre">1</span>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
