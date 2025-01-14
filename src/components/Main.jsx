"use client";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";

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
            onChange={(e) => setFirstName(e.target.value)}
            firstName={firstName}
            label="First name"
            placeholder="Your first name"
            errorText="Нэрээ оруулна уу"
          />
          <Input
            onChange={(e) => setLastName(e.target.value)}
            lastName={lastName}
            label="Last name"
            placeholder="Your last name"
            errorText="Овгоо оруулна уу"
          />
          <Input
            onChange={(e) => setUserName(e.target.value)}
            username={username}
            label="Username"
            placeholder="Your username"
            errorText="Хэрэглэгчийн нэрээ оруулна уу"
          />
        </div>
      </div>
      <Button />
    </div>
  );
}
