"use client";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import Header from "./Header";

export default function SecondForm({}) {
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
        <Header />
        <div className="flex flex-col items-start gap-1 w-[416px]">
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
