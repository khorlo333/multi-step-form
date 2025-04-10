import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import BackButton from "./BackButton";
import * as motion from "motion/react-client";

export default function ThirdForm({ setCurrentStep, currentStep }) {
  const [imageUrl, setImageUrl] = useState();

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
  const onFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImageUrl(URL.createObjectURL(file));
      setFormErrors((prev) => ({ ...prev, profileImage: "" }));
    }
  };

  const handleClickBack = () => {
    return setCurrentStep(currentStep - 1);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    if (!formValues.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Please select a date.";
      isValid = false;
    } else {
      const currentDate = new Date();
      const birthDate = new Date(formValues.dateOfBirth);
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      const monthDifference = currentDate.getMonth() - birthDate.getMonth();
      const dayDifference = currentDate.getDate() - birthDate.getDate();

      if (
        age < 18 ||
        (age === 18 &&
          (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)))
      ) {
        newErrors.dateOfBirth = "You must be at least 18 years old.";
        isValid = false;
      }
    }

    if (!imageUrl) {
      newErrors.profileImage = "Image cannot be blank";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
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
    const isValid = validateForm();

    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <motion.div
      className="w-[480px] h-[655px] p-[32px] rounded-[8px] flex flex-col justify-between items-start bg-[#fff]"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: -100 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.72 }}
    >
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
          <div className="w-full" id="profileImage">
            <h2 className="text-[#334155] text-[14px] font-semibold mb-3">
              Profile image <span className="text-[#e14942]">*</span>
            </h2>

            <label htmlFor="file-input">
              <input
                hidden
                id="file-input"
                type="file"
                onChange={onFileUpload}
              ></input>
              {imageUrl ? (
                <img
                  className="object-contain h-[200px] w-full bg-zinc-200"
                  src={imageUrl}
                  alt="Upload image"
                />
              ) : (
                <div className="bg-zinc-200 w-full h-[200px] flex justify-center items-center flex-col">
                  <img className="mx-auto" src="/Main 1.png" />

                  <p className="text-[#334155] mt-3">Add image</p>
                </div>
              )}
            </label>

            {formErrors.profileImage && (
              <p className="text-[#e14942] text-[13px]">
                {formErrors.profileImage}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-[100%] gap-2 justify-between">
        <BackButton handleClick={handleClickBack} />
        <Button handleClick={handleClick} currentStep={currentStep} />
      </div>
    </motion.div>
  );
}
