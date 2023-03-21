import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../Context";

const SideMenu = () => {
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const [columns, setColumns] = useState("col-2");

  const container = useRef(null);

  useEffect(() => {
    setColumns((prevValue) => (prevValue = "col-2"));
    const subMenu = container.current;
    console.log("subMenu:", subMenu);
    const { center, bottom } = location;
    subMenu.style.left = `${center}px`;
    subMenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns((prevValue) => (prevValue = "col-3"));
    }

    if (links.length > 3) {
      setColumns((prevValue) => (prevValue = "col-4"));
    }
  }, [location, links]);
  return (
    <aside
      ref={container}
      className={`${isSubMenuOpen ? "submenu show" : "submenu"}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default SideMenu;
