import { useState, useEffect } from "react";
import HamburgerComponent from "./Hamburger";
import Menu from "./Menu";

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
              <a href="/">Qitchen</a>
            </div>

            <div className="nav-links">
              <a href="/menu">menu</a>
              <a href="/about">about</a>
              <a href="/reservation" id="book">
                Book a Table
              </a>
            </div>
          </>
        )}
      </nav>

      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
