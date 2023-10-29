import "./NavBar.scss";
import { NavLink } from "react-router-dom";

// Logo
import InStock_Logo from "../../assets/logos/InStock-Logo.svg";

function NavBar() {
  return (
    <>
      <div className="NavBar__container">
        <NavLink to={"/"}>
          <img
            className="NavBar__image"
            src={InStock_Logo}
            alt="InStock Logo"
          />
        </NavLink>

        <div className="NavBar__button--container">
          <NavLink to={"/warehouse"}>
            <button className="NavBar__button">Warehouses</button>
          </NavLink>

          <NavLink to={"/inventory"}>
            <button className="NavBar__button">Inventory</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
