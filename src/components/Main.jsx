"use client";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";

export default function Main() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });
  // const [username, setUserName] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleClick = () => {
    const { firstName, lastName, username } = formValues;

    if (!firstName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "Нэрээ оруулна уу",
      }));
    }

    if (!lastName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Овгоо оруулна уу",
      }));
    }
    if (!username.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        username: "Хэрэглэгчийн нэрээ оруулна уу",
      }));
    }
  };
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
            onChange={handleChange}
            label="First name"
            placeholder="Your first name"
            name="firstName"
            errorText={formErrors.firstName}
          />
          <Input
            onChange={handleChange}
            label="Last name"
            placeholder="Your last name"
            name="lastName"
            errorText={formErrors.lastName}
          />
          <Input
            onChange={handleChange}
            label="Username"
            placeholder="Your username"
            name="username"
            errorText={formErrors.username}
          />
        </div>
      </div>
      <Button handleClick={handleClick} />
    </div>
  );
}
