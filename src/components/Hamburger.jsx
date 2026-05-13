import Hamburger from "hamburger-react";

const HamburgerComponent = ({ isOpen, setIsOpen }) => {
  return (
    <Hamburger size={24} toggled={isOpen} toggle={setIsOpen} color="#efe7d2" />
  );
};

export default HamburgerComponent;
