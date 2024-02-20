import { Logo } from "../components";
import logo from "../assets/images/logo.png";
import landing from "../assets/images/landing-img.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="px-[10vw] max-h-[100vh] py-[5vw]">
      <Logo />
      <div className="hero min-h-[70vh] place-content-center	items-center grid sm:grid-cols-2 gap-x-28 ">
        <div className="text grid gap-10">
          <h2 className="text-4xl">
            Job <span className="text-primary font-semibold">Tracking</span> App
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            aspernatur sunt distinctio, numquam laudantium quaerat provident
            culpa vero impedit accusamus non dolorem optio laborum porro sed
            ducimus possimus ad fugiat.
          </p>
          <div className="btns grid grid-cols-2">
            <Link
              to="/register"
              className="bg-primary text-center text-white rounded px-4 py-1 mr-2"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-blue-600 text-white text-center rounded px-4 py-1"
            >
              Login/Guest User
            </Link>
          </div>
        </div>
        <div>
          <img className="sm:block hidden" src={landing} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Landing;
