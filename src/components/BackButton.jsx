import { ChevronLeft } from "lucide-react";

export default function BackButton({ handleClick, currentStep }) {
  return (
    <button className="flex py-2.5 px-3 justify-center items-center gap-1 rounded-md bg-[#fff] text-black border-[1px] border-gray-500 hover:bg-gray-100">
      <ChevronLeft />
      <p className=" text-[16px] font-medium " onClick={handleClick}>
        Back
      </p>
    </button>
  );
}
