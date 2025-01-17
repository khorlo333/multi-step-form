import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import * as motion from "motion/react-client";

export default function Main({ setCurrentStep, currentStep }) {
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
    } else if (/[^a-zA-Z]/.test(firstName)) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "Текст оруулна уу",
      }));
    }

    if (!lastName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Овгоо оруулна уу",
      }));
    } else if (/[^a-zA-Z]/.test(lastName)) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Текст оруулна уу",
      }));
    }
    if (!username.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        username: "Хэрэглэгчийн нэрээ оруулна уу",
      }));
    } else if (/[^a-zA-Z]/.test(username)) {
      setFormErrors((prev) => ({
        ...prev,
        username: "Текст оруулна уу",
      }));
    } else {
      return setCurrentStep(currentStep + 1);
    }
  };
  return (
    <motion.div
      className="w-[480px] min-h-[655px] p-[32px] rounded-[8px] flex flex-col justify-between items-start bg-[#fff]"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.72 }}
    >
      <div className="flex flex-col items-start gap-7 ">
        <Header />
        <div className="flex flex-col items-start gap-1 w-[416px]">
          <Input
            onChange={handleChange}
            label="First name"
            placeholder="Your first name"
            type="text"
            name="firstName"
            errorText={formErrors.firstName}
          />
          <Input
            onChange={handleChange}
            label="Last name"
            placeholder="Your last name"
            type="text"
            name="lastName"
            errorText={formErrors.lastName}
          />
          <Input
            onChange={handleChange}
            label="Username"
            type="text"
            placeholder="Your username"
            name="username"
            errorText={formErrors.username}
          />
        </div>
      </div>
      <div className="w-full">
        <Button handleClick={handleClick} currentStep={currentStep} />
      </div>
    </motion.div>
  );
}
