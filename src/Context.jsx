import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(true);

  const openSideBar = () => {
    setIsSideBarOpened(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpened(false);
  };

  const openSubMenu = () => {
    setIsSubMenuOpened(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpened(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubMenuOpened,
        isSideBarOpened,
        openSubMenu,
        openSideBar,
        closeSideBar,
        closeSubMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom-hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
