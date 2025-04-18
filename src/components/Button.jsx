import { ChevronRight } from "lucide-react";

export default function Button({ handleClick, currentStep }) {
  return (
    <button className="flex py-2.5 px-3 justify-center items-center gap-1 rounded-md bg-[#121316] hover:opacity-80 w-[100%]">
      <p className="text-[#fff] text-[16px] font-medium " onClick={handleClick}>
        Continue {currentStep + 1}/3
      </p>
      <ChevronRight className="text-white" />
    </button>
  );
}
