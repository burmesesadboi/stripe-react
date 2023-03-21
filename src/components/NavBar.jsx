import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const NavBar = () => {
  const { openSideBar, openSubMenu, closeSubMenu } = useGlobalContext();

  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    console.log("page:", page);
    const btnTemp = e.target.getBoundingClientRect();
    console.log("btnTemp:", btnTemp);
    const center = (btnTemp.left + btnTemp.right) / 2;
    const bottom = btnTemp.bottom - 3;
    openSubMenu(page, { center, bottom });
  };

  const handleSubMenu = (e) => {
    if (!e.target.classList.contains("btn-link")) {
      closeSubMenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn btn-toggle" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="btn-link" onMouseOver={displaySubMenu}>
              products
            </button>
          </li>
          <li>
            <button className="btn-link" onMouseOver={displaySubMenu}>
              developers
            </button>
          </li>
          <li>
            <button className="btn-link" onMouseOver={displaySubMenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn btn-signIn" onMouseOver={displaySubMenu}>
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
