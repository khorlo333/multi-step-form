import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import BackButton from "./BackButton";

export default function SecondForm() {
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
    }

    if (!phoneNumber.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Утасны дугаараа оруулна уу",
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
  };
  return (
    <div className="w-[480px] h-[655px] p-[32px] rounded-[8px] flex flex-col justify-between items-start bg-[#fff]">
      <div className="flex flex-col items-start gap-[28px] ">
        <Header />
        <div className="flex flex-col items-start gap-[28px] w-[416px]">
          <Input
            onChange={handleChange}
            label="Email"
            placeholder="Your email"
            type="email"
            name="email"
            errorText={formErrors.email}
          />
          <Input
            onChange={handleChange}
            label="Phone number"
            type="number"
            placeholder="Your phone number"
            name="phoneNumber"
            errorText={formErrors.phoneNumber}
          />
          <Input
            onChange={handleChange}
            label="Password"
            type="password"
            placeholder="Your password"
            name="password"
            errorText={formErrors.password}
          />
          <Input
            onChange={handleChange}
            label="Confirm password"
            type="password"
            placeholder="Confirm your password "
            name="confirmPassword"
            errorText={formErrors.confirmPassword}
          />
        </div>
      </div>
      <div className="flex w-[100%] justify-between">
        <BackButton />
        <Button handleClick={handleClick} />
      </div>
    </div>
  );
}
