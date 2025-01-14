export default function Input({
  label,
  placeholder,
  onChange,
  lastName,
  username,
  firstName,
  errorText,
}) {
  let error = "";
  !lastName ? (error = true) : (error = null);
  !username ? (error = true) : (error = null);
  !firstName ? (error = true) : (error = null);
  return (
    <div className="flex flex-col items-start gap-2 self-stretch ">
      <p className="text-[#334155] text-[14px] font-semibold  ">
        {label}
        <span className="text-[#e14942] text-[14px] font-semibold  ">*</span>
      </p>
      <input
        value={lastName}
        className={`flex p-[12px] items-center self-stretch rounded-lg border-[1px] border-solid border-[#8b8e95] focus:outline-none focus:border-[#0ca5e9] ${
          error ? "border-[#e14942]" : "focus:border-[#0ca5e9]"
        }`}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      {error ? (
        <p className="text-[#e14942] py-2 mt-[-15px]">{errorText}</p>
      ) : null}
    </div>
  );
}
