import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const NavBar = () => {
  const { openSideBar, openSubMenu, closeSubMenu } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn btn-toggle" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="btn-link">products</button>
          </li>
          <li>
            <button className="btn-link">developers</button>
          </li>
          <li>
            <button className="btn-link">company</button>
          </li>
        </ul>
        <button className="btn btn-signIn">Sign in</button>
      </div>
    </nav>
  );
};

export default NavBar;
