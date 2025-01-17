"use client";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center pt-[182px] px-[480px] pb-[187px] bg-[#f4f4f4]">
      <motion.div
        className="w-[100px] h-[100px] rounded-md bg-green-400 "
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
