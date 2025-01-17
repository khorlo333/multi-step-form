import * as motion from "motion/react-client";

export default function FourthForm() {
  return (
    <motion.div
      className="min-w-[480px] p-[32px] rounded-[8px] flex flex-col justify-between items-start bg-[#fff]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.72 }}
    >
      <img src="Main 1.png" alt="" />
      <h2 className="text-[#202124] text-[26px] text-normal font-semibold  ">
        You're All Set 🔥
      </h2>
      <p className="text-[#8E8E8E] text-center text-[18px] font-normal  ">
        We have received your submission. Thank you!
      </p>
    </motion.div>
  );
}
