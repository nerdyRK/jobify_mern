import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useDashboardContext } from "../pages/DashboardLayout";
const NavLinks = ({ isBigScreen }) => {
  const { toggleSidebar, sidebar } = useDashboardContext();
  return (
    <div className="nav-links flex flex-col items-center mt-8 gap-y-5">
      {links.map((link) => {
        return (
          <NavLink
            className={`flex items-center gap-2 hover:pl-4 hover:text-primary duration-300`}
            onClick={isBigScreen ? null : toggleSidebar}
            to={link.path}
            key={link.text}
            end
          >
            <span>{link.icon}</span>
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
