import { Link } from "react-router-dom";
import { FormInput, Logo } from "../components";

const Register = () => {
  return (
    <div className="flex flex-col  w-screen h-screen items-center justify-center">
      <div className="flex rounded-lg  border-t-primary border-4 bg-green-200 gap-y-4 py-6 px-8 flex-col">
        <Logo width={"80px"} />
        <h1 className="text-2xl text-center mb-6 font-semibold">
          Register Page
        </h1>
        <FormInput type="text" defaultValue="ravi" name="name" />
        <FormInput type="text" defaultValue="earth" name="location" />
        <FormInput type="email" defaultValue="rav@test.com" name="email" />
        <FormInput type="password" defaultValue="1234" name="password" />
        <button className="bg-primary py-1 rounded text-teal-50">Submit</button>
        <p>
          Already have an Account?
          <Link className="text-blue-600 font-semibold" to="/login">
            Login Here!
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
