const FormInput = ({ name, type, defaultValue }) => {
  return (
    <div className="flex justify-between min-w-[300px] ">
      <label className="text-lg" htmlFor={name}>
        {name}
      </label>
      <input
        className="border text-lg py-[2px] pl-2 rounded focus:outline-none border-slate-500"
        type={type}
        id={name}
        defaultValue={defaultValue || ""}
      />
    </div>
  );
};
export default FormInput;
