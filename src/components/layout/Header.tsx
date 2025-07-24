import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { FaPersonMilitaryRifle } from "react-icons/fa6";



const Header: React.FC = () => {
  return (
    <>
      <div className="header-content2">
          <div className="header-item eco">
          <p className="header-item-text">3.52M</p>
          <MdAttachMoney className= "header-item-icon"/>
          </div>
      </div>

      <div className="header-content">
          <div className="header-item pop">
            <p className="header-item-text">3.52M</p>
            <MdOutlinePeopleAlt className= "header-item-icon"/>
            
          </div>
          <div className="header-item eco">
            <p className="header-item-text">3.52M</p>
            <MdAttachMoney className= "header-item-icon"/>
          </div>
          <div className="header-item mili">
            <p className="header-item-text">3.52M</p>
            <FaPersonMilitaryRifle className= "header-item-icon"/>
          </div>
      </div>
    </>
  )
}
export default Header;