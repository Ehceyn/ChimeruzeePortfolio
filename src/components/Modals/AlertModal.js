//For Alerts, on success, error etc.

// Props:
// heading: string
// message: string
// status: string is "success" or "error"
// ButtonText: string
// onCallAlertModal: function
// onClickButton: function
// display: boolean

import React, { useState } from "react";
// import { authLeft } from "../../animations/animations";
// import { scaleUp } from "../../animations/animations";
import { motion } from "framer-motion";
import ErrorIcon from "../SVGS/ErrorIcon";
import SuccessIcon from "../SVGS/SuccessIcon";

const AlertModal = (props) => {
  const [loader, setLoader] = useState(false);

  return (
    <motion.section
      // variants={authLeft}
      initial="initial"
      animate="animate"
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          delay: 2,
        },
      }}
      className={`w-full h-screen bg-[#121212b9] shadow-sm fixed inset-0 z-[30000] flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallAlertModal}
    >
      <motion.div
        // variants={scaleUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col justify-between w-[320px] min-h-[200px] sm:w-[450px] sm:min-h-[300px] border rounded-lg bg-[#121212] border-[#454545] p-5 sm:p-7 shadow-[0px_0px_20px_15px_#8705051f]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading start */}
        <article className="w-full flex justify-center  mb-4">
          <h3 className="font-bold font-GTWalsheimPro text-4xl">
            {props.heading}
          </h3>
        </article>
        {/* Heading end */}
        {/* Alert status icon start */}
        <motion.div
          initial={{}}
          className="w-full flex justify-center items-center mb-4"
        >
          {/* conditional rendering of icons based on props.status */}
          {props.status === "success" ? <SuccessIcon /> : <ErrorIcon />}
        </motion.div>
        {/* Alert message start */}
        <div className="flex justify-center max-h-28 overflow-y-auto">
          <p className="text-center w-[350px]">{props.message}</p>
        </div>
        {/* Alert message end */}
        {/* Alert buttons start */}
        <article className="flex items-center justify-between w-full mt-7">
          <button
            type="button"
            className={`flex uppercase justify-center items-center px-4 py-4 w-24 grow font-bold text-white rounded-md bg-[#0f0f0f] hover:bg-[#0a0a0a] active:bg-[#0a0a0a] tracking-widest`}
            onClick={props.onClickButton}
          >
            {props.ButtonText}
          </button>
        </article>
        {/* Alert buttons end */}
      </motion.div>
    </motion.section>
  );
};

export default AlertModal;
