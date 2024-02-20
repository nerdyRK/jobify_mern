import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDashboardContext } from "../pages/DashboardLayout";

const ThemeToggler = () => {
  let { darkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <div onClick={toggleDarkTheme}>
      {darkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
    </div>
  );
};
export default ThemeToggler;
