import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";
import Logout from "./Logout";
import ThemeToggler from "./ThemeToggler";
const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <div className="flex text-white justify-between px-8 bg-slate-600 items-center">
      <button onClick={toggleSidebar}>
        <FaAlignLeft />
      </button>
      <div className="md:hidden block">
        <Logo />
      </div>
      <h1 className="hidden text-2xl py-4 md:block">Dashboard</h1>

      <div className="flex items-center gap-x-5">
        <ThemeToggler />
        <Logout />
      </div>
    </div>
  );
};
export default Navbar;
