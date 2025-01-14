import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import BackButton from "./BackButton";

export default function ThirdForm() {
  const [formValues, setFormValues] = useState({
    dateOfBirth: "",
    profileImage: "",
  });
  const [formErrors, setFormErrors] = useState({
    dateOfBirth: "",
    profileImage: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleClick = () => {
    const { dateOfBirth, profileImage } = formValues;

    if (!dateOfBirth.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        dateOfBirth: "Төрсөн өдрөө оруулна уу",
      }));
    }

    if (!profileImage.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        profileImage: "Профайл зурагаа оруулна уу",
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
            label="Date of birth"
            name="dateOfBirth"
            type="date"
            errorText={formErrors.dateOfBirth}
          />
          <Input
            onChange={handleChange}
            label="Profile image"
            name="profileImage"
            errorText={formErrors.profileImage}
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
