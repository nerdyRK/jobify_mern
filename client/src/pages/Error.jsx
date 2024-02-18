import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
const Error = () => {
  return (
    <div
      className="flex justify-center
    flex-col items-center gap-6"
    >
      <img className="max-w-[600px]" src={img} alt="" />
      <h3 className="text-red-500 font-semibold">Ohh! page not found!</h3>
      <p>We can't seem to find the page you are looking for</p>
      <Link
        className="bg-primary rounded-lg text-zinc-50 p-2"
        to={"/dashboard"}
      >
        Back to Home
      </Link>
    </div>
  );
};
export default Error;
