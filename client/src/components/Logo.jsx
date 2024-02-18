import logo from "../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="logo relative">
      <img className="main-logo max-w-[100px]" src={logo} alt="a logo" />
      <div className="logo-text text-primary absolute top-[2rem] left-[7rem] font-bold text-4xl">
        Jobify
      </div>
    </div>
  );
};
export default Logo;
