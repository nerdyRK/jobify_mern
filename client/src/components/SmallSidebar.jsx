import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { toggleSidebar, sidebar } = useDashboardContext();
  // console.log(data);
  return (
    <div
      className={`md:hidden duration-300 origin-top ${
        sidebar ? `scale-100 opacity-100` : "scale-0 opacity-0"
      } flex-col flex items-center gap-y-6 absolute bg-slate-400 h-[90vh] my-[5vh] w-[96vw] mx-[2vw] z-10`}
    >
      <button
        className="absolute left-4 top-4 text-red-400 text-xl"
        onClick={toggleSidebar}
      >
        <FaTimes />
      </button>
      <header className="mt-6">
        <Logo />
      </header>
      <NavLinks />
    </div>
  );
};
export default SmallSidebar;
