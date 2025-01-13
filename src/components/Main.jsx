"use client";
import { ChevronRight } from "lucide-react";
import Input from "./Input";
import { useState } from "react";

export default function Main() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
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
          <Input
            firstName={firstName}
            setFirstName={setFirstName}
            label="First name"
            placeholder="Your first name"
            errorText="Нэрээ оруулна уу"
          />
          <Input
            lastName={lastName}
            setLastName={setLastName}
            label="Last name"
            placeholder="Your last name"
            errorText="Овгоо оруулна уу"
          />
          <Input
            username={username}
            setUserName={setUserName}
            label="Username"
            placeholder="Your username"
            errorText="Хэрэглэгчийн нэрээ оруулна уу"
          />
        </div>
      </div>
      <div>
        <button className="flex py-2.5 px-3 justify-center items-center gap-1 rounded-md bg-[#121316] w-[416px]">
          {" "}
          <p className="text-[#fff] text-[16px] font-medium ">Continue 1/3</p>
          <ChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
}
