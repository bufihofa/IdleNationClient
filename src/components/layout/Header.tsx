import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { FaPersonMilitaryRifle } from "react-icons/fa6";



const Header: React.FC = () => {
  return (
    <>
      

      <div className="header-content">
          <div className="header-item pop">
            <p className="header-item-text">92.52M</p>
            <MdOutlinePeopleAlt className= "header-item-icon"/>
            
          </div>
          <div className="header-item eco">
            <p className="header-item-text">1.52T</p>
            <MdAttachMoney className= "header-item-icon"/>
          </div>
          <div className="header-item mili">
            <p className="header-item-text">343.52K</p>
            <FaPersonMilitaryRifle className= "header-item-icon"/>
          </div>
      </div>
      
    </>
  )
}
export default Header;