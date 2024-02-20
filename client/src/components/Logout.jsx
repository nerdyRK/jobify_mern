import { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";

const Logout = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <div>
      <button
        className="flex items-center gap-2 bg-primary p-2"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>
      <button
        className={`${
          showLogout ? "scale-100" : "scale-0"
        } absolute top-16 p-2 right-10 origin-top mt-2 duration-150 bg-primary `}
        onClick={logoutUser}
      >
        Logout
      </button>
    </div>
  );
};
export default Logout;
