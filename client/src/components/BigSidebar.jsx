import { useDashboardContext } from "../pages/DashboardLayout";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const BigSidebar = () => {
  const { sidebar } = useDashboardContext();
  return (
    <div
      className={`md:block hidden h-screen min-w-[240px] ${
        sidebar ? "ml-[-240px]" : "ml-[0px]"
      } bg-slate-600 p-4 duration-100`}
    >
      <div className="">
        <Logo />
      </div>

      <NavLinks isBigScreen />
    </div>
  );
};
export default BigSidebar;
