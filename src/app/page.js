"use client";

import FourthForm from "@/components/FourthForm";
import Main from "@/components/Main";
import SecondForm from "@/components/SecondForm";
import ThirdForm from "@/components/ThirdForm";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const FormSteps = [Main, SecondForm, ThirdForm, FourthForm][currentStep];
  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center pt-[182px] px-[480px] pb-[187px] bg-[#f4f4f4]">
      <FormSteps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        // back={() => {
        //   setCurrentStep(currentStep + 1);
        // }}
        // onClick={() => {
        //   setCurrentStep(currentStep + 1);
        // }}
      />
    </div>
  );
}
