import { navLinks } from "../../constants";

const Menu = ({ setIsOpen }) => {
  return (
    <div className="menu-overlay">
      <div className="rectangle">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={() => setIsOpen(false)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
