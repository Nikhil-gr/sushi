import { useState, useEffect } from "react";
import HamburgerComponent from "./Hamburger";
import Menu from "./Menu";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <nav className={isOpen ? "nav-open" : ""}>
        <div className="hamburg">
          <HamburgerComponent isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {!isOpen && (
          <>
            <div id="logo">
              <Link to={"/"}>Qitchen</Link>
            </div>

            <div className="nav-links">
              <NavLink to="/menu">Menu</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/reservation" id="book">
                Book a table
              </NavLink>
            </div>
          </>
        )}
      </nav>

      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
