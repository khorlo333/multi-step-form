import Input from "./Input";
import { useState, useEffect } from "react";
import Button from "./Button";
import Header from "./Header";
import BackButton from "./BackButton";
import * as motion from "motion/react-client";

export default function SecondForm({ setCurrentStep, currentStep }) {
  const [formValues, setFormValues] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const Email = localStorage.getItem("email");
    const phonenumber = localStorage.getItem("phoneNumber");
    const Password = localStorage.getItem("password");
    const confirmpassword = localStorage.getItem("confirmPassword");
    if (Email && phonenumber && Password && confirmpassword) {
      setFormValues({
        ...formValues,
        email: Email,
        phoneNumber: phonenumber,
        password: Password,
        confirmPassword: confirmpassword,
      });
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleClick = () => {
    const { email, phoneNumber, password, confirmPassword } = formValues;

    if (!email.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Мэйл хаягаа оруулна уу",
      }));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Зөв мэйл хаяг оруулна уу",
      }));
    }

    if (!phoneNumber.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Утасны дугаараа оруулна уу",
      }));
    } else if (!/^\+?\d{8}$/.test(phoneNumber)) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Тоо оруулна уу",
      }));
    } else if (phoneNumber.length < 8) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "8 оронтой дугаар оруулна уу.",
      }));
    }
    if (!password.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        password: "Нууц үгээ оруулна уу",
      }));
    }
    if (!confirmPassword.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Нууц үгээ давтаж оруулна уу",
      }));
    }
    if (password.length < 6) {
      setFormErrors((prev) => ({
        ...prev,
        password: "6 оронтой дугаар оруулна уу.",
      }));
    } else if (password !== confirmPassword) {
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Таны оруулсан нууц үг таарахгүй байна.",
      }));
    } else {
      return (
        setCurrentStep(currentStep + 1),
        localStorage.setItem("email", formValues.email),
        localStorage.setItem("phoneNumber", formValues.phoneNumber),
        localStorage.setItem("password", formValues.password),
        localStorage.setItem("confirmPassword", formValues.confirmPassword)
      );
    }
  };

  const handleClickBack = () => {
    return setCurrentStep(currentStep - 1);
  };
  return (
    <motion.div
      className="w-[480px] min-h-[655px] p-[32px] rounded-[8px] flex flex-col justify-between items-start bg-[#fff]"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.83 }}
    >
      <div className="flex flex-col items-start gap-[28px] ">
        <Header />
        <div className="flex flex-col items-start gap-1 w-[416px]">
          <Input
            onChange={handleChange}
            label="Email"
            placeholder="Your email"
            type="email"
            name="email"
            value={formValues.email}
            errorText={formErrors.email}
          />
          <Input
            onChange={handleChange}
            label="Phone number"
            type="number"
            placeholder="Your phone number"
            name="phoneNumber"
            value={formValues.phoneNumber}
            errorText={formErrors.phoneNumber}
          />
          <Input
            onChange={handleChange}
            label="Password"
            type="password"
            placeholder="Your password"
            name="password"
            value={formValues.password}
            errorText={formErrors.password}
          />
          <Input
            onChange={handleChange}
            label="Confirm password"
            type="password"
            placeholder="Confirm your password "
            name="confirmPassword"
            value={formValues.confirmPassword}
            errorText={formErrors.confirmPassword}
          />
        </div>
      </div>
      <div className="flex w-[100%] gap-2 justify-between">
        <BackButton handleClick={handleClickBack} />
        <Button handleClick={handleClick} currentStep={currentStep} />
      </div>
    </motion.div>
  );
}
