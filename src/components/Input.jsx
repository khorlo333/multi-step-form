export default function Input({
  label,
  placeholder,
  onChange,
  errorText,
  name,
  type,
}) {
  return (
    <div className="flex flex-col items-start gap-2 self-stretch ">
      <p className="text-[#334155] text-[14px] font-semibold  ">
        {label}
        <span className="text-[#e14942] text-[14px] font-semibold  ">*</span>
      </p>
      <input
        name={name}
        type={type}
        className={`flex p-[12px] items-center self-stretch rounded-lg border-[1px] border-solid border-[#8b8e95] focus:outline-none focus:border-[#0ca5e9] ${
          errorText ? "border-[#e14942] " : "border-[#8b8e95]"
        } `}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className="text-[#e14942] test-[13px]">{errorText}</p>
    </div>
  );
}
