import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { MdOutlineMilitaryTech } from "react-icons/md";
import { MdOutlineConstruction } from "react-icons/md";
import { MdOutlineStorefront } from "react-icons/md";
import { MdOutlineHandshake } from "react-icons/md";
import { MdPeopleOutline } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <div className="footer-content">
      <NavLink to="/dashboard" className="footer-link">
        <MdOutlineDashboard className="footer-icon" />
      </NavLink>

      <NavLink to="/economy" className="footer-link">
        <RiMoneyDollarBoxLine className="footer-icon" />
      </NavLink>

      <NavLink to="/military" className="footer-link">
        <MdOutlineMilitaryTech className="footer-icon" />
      </NavLink>

      <NavLink to="/population" className="footer-link">
        <MdPeopleOutline className="footer-icon" />
      </NavLink>

      <NavLink to="/construction" className="footer-link">
        <MdOutlineConstruction className="footer-icon" />
      </NavLink>

      <NavLink to="/market" className="footer-link">
        <MdOutlineStorefront className="footer-icon" />
      </NavLink>

      <NavLink to="/diplomacy" className="footer-link">
        <MdOutlineHandshake className="footer-icon" />
      </NavLink>
    </div>
  );
}

export default Footer;