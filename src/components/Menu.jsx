import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants";

const Menu = ({ setIsOpen }) => {
  return (
    <div className="menu-overlay">
      <div className="rectangle">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} onClick={() => setIsOpen(false)}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
