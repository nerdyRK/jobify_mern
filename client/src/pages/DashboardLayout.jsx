import { createContext, useContext, useState } from "react";
import { SmallSidebar, BigSidebar, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const DashboardContext = createContext();
const DashboardLayout = () => {
  let user = { name: "rk" };
  let [sidebar, setSidebar] = useState(false);
  let [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };

  const logoutUser = async () => {
    console.log("logged out");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        sidebar,
        darkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <main className="grid grid-cols-1 md:grid-cols-[auto,1fr]">
        <SmallSidebar />
        <BigSidebar isBigScreen />
        <div>
          <Navbar />
          <div className="dashboard-page">
            {" "}
            <Outlet />
          </div>
        </div>
      </main>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
