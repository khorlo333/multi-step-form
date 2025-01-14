import { ChevronLeft } from "lucide-react";

export default function BackButton({ handleClick }) {
  return (
    <div>
      <button className="flex py-2.5 px-3 justify-center items-center gap-1 rounded-md bg-[#121316] w-[100%]">
        <ChevronLeft className="text-white" />
        <p
          className="text-[#fff] text-[16px] font-medium "
          onClick={handleClick}
        >
          Back
        </p>
      </button>
    </div>
  );
}
