export default function Main() {
  return (
    <div className="w-[480px] h-[655px] p-[32px] rounded-[8px] flex flex-col justify-between items-start bg-[#fff]">
      <div className="flex flex-col items-start gap-[28px] ">
        <div className="flex flex-col w-[416px] items-start gap-2">
          <img src="Main 1.png" alt="" />
          <h2 className="text-[#202124] text-[26px] text-normal font-semibold  ">
            Join Us! 😎
          </h2>
          <p className="text-[#8E8E8E] text-center text-[18px] font-normal  ">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="flex flex-col items-start gap-[28px] w-[416px]">
          <div className="flex flex-col items-start gap-2 self-stretch ">
            <p className="text-[#334155] text-[14px] font-semibold  ">
              First name{" "}
              <span className="text-[#e14942] text-[14px] font-semibold  ">
                *
              </span>
            </p>
            <input
              className="flex p-[12px] items-center self-stretch rounded-lg border-[1px] border-solid border-[#0ca5e9] "
              type="text"
              placeholder="Placeholder"
            />
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch ">
            <p className="text-[#334155] text-[14px] font-semibold  ">
              First name{" "}
              <span className="text-[#e14942] text-[14px] font-semibold  ">
                *
              </span>
            </p>
            <input
              className="flex p-[12px] items-center self-stretch rounded-lg border-[1px] border-solid border-[#0ca5e9] "
              type="text"
              placeholder="Placeholder"
            />
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch ">
            <p className="text-[#334155] text-[14px] font-semibold  ">
              Username{" "}
              <span className="text-[#e14942] text-[14px] font-semibold  ">
                *
              </span>
            </p>
            <input
              className="flex p-[12px] items-center self-stretch rounded-lg border-[1px] border-solid border-[#0ca5e9] "
              type="text"
              placeholder="Placeholder"
            />
          </div>
        </div>
      </div>
      <div>
        <button className="flex py-2.5 px-3 justify-center items-center gap-1 rounded-md bg-[#121316] "></button>
      </div>
    </div>
  );
}
