import React, { useRef, useState } from "react";
import Image from "next/image";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import AlertModal from "../Modals/AlertModal";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

function Contact() {
  const [loader, setLoader] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertHeading, setAlertHeading] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const form = useRef();

  // Formik initial values ... this is the initial form state
  let initialValues = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };

  // Yup validation schema... this is for form validation
  const validationSchema = Yup.object({
    fullName: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid Email")
      .required("This field is required"),
    // Phone number validation
    phone: Yup.string().matches(/^[0-9]{14}$/, "Invalid Phone Number"),
    message: Yup.string().required("This field is required"),
  });

  //The useFormik hook... takes all variables for handling the form
  const formik = useFormik({
    initialValues,
    // onSubmit,
    validationSchema,
  });

  const sendEmail = () => {
    console.log(form.current, "form current");
    emailjs
      .sendForm(
        "service_1uyu59t",
        "template_ycp1p46",
        form.current,
        "user_45P0sivHcc6PnCNY5cdtH"
      )
      .then(
        (result) => {
          console.log(result.text, "result.text");
          setLoader(false);
          setDisplayAlert(true);
          setAlertHeading("Success");
          setAlertMessage("Your message has been sent successfully");
          setAlertStatus("success");

          formik.resetForm();

          setTimeout(() => {
            setDisplayAlert(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text, " error.text");
          setLoader(false);
          setDisplayAlert(true);
          setAlertHeading("Error");
          setAlertMessage("Your message was not sent");
          setAlertStatus("error");
        }
      );
  };

  return (
    <section className=" w-full min-h-[80vh] h-fit mb-20 ">
      <AlertModal
        display={displayAlert}
        onClickButton={() => setDisplayAlert(false)}
        heading={alertHeading}
        message={alertMessage}
        status={alertStatus}
        onCallAlertModal={() => setDisplayAlert(false)}
        ButtonText="ok, got it"
      />
      <div className="w-full  py-20 px-7 md2:px-[70px] min-h-[80vh] bg-[#2020205b] h-fit">
        <article className="w-full flex justify-center mb-20">
          <h2 className="text-5xl md2:text-6xl lg:text-8xl">CONTACT</h2>
        </article>

        <div className="flex flex-col-reverse md2:flex-row w-full items-center md2:justify-center md2:space-x-32 lg:space-x-64">
          {/* Form Starts*/}
          <div className="  md:w-[400px] w-full mt-20 md2:mt-0">
            <form
              ref={form}
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit(e);
                sendEmail();
              }}
              className="flex md2:block flex-col items-center"
            >
              <div className="mb-6 w-full">
                <label htmlFor="name" className="block mb-2">
                  <p>
                    Full name<sup>*</sup>
                  </p>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="border focus:outline-none rounded-lg block w-full font-[Sintony-Regular] p-2.5 border-gray-600 bg-transparent placeholder-[#999] text-white focus:ring-[#A32B7B] focus:border-[#A32B7B]"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                />
                {/* display fullName errors*/}
                {formik.errors.fullName && formik.touched.fullName ? (
                  <p className="text-red-600 text-xs mt-1 mx-1">
                    {formik.errors.fullName}
                  </p>
                ) : null}
              </div>
              <div className="w-full mb-6">
                <label htmlFor="email" className="block mb-2">
                  <p>
                    Email<sup>*</sup>
                  </p>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border focus:outline-none rounded-lg block w-full font-[Sintony-Regular] p-2.5 border-gray-600 bg-transparent placeholder-[#999] text-white focus:ring-[#A32B7B] focus:border-[#A32B7B]"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {/* display email errors*/}
                {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-600 text-xs mt-1 mx-1">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
              <div className="w-full mb-6">
                <label htmlFor="phone" className="block mb-2">
                  <p>Phone Number</p>
                </label>
                <input
                  type="tel"
                  maxLength="20"
                  id="phone"
                  name="phone"
                  className="border focus:outline-none rounded-lg block w-full font-[Sintony-Regular] p-2.5 border-gray-600 bg-transparent placeholder-[#999] text-white focus:ring-[#A32B7B] focus:border-[#A32B7B]"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {/* display phone errors*/}
                {formik.errors.phone && formik.touched.phone ? (
                  <p className="text-red-600 text-xs mt-1 mx-1">
                    {formik.errors.phone}
                  </p>
                ) : null}
              </div>

              <div className="w-full mb-6">
                <label htmlFor="message" className="block mb-2">
                  <p>
                    Message<sup>*</sup>
                  </p>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className=" border focus:outline-none rounded-lg block w-full font-[Sintony-Regular] p-2.5 border-gray-600 bg-transparent placeholder-[#999] text-white focus:ring-[#A32B7B] focus:border-[#A32B7B]"
                  required
                  rows={4}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {/* display message errors*/}
                {formik.errors.message && formik.touched.message ? (
                  <p className="text-red-600 text-xs mt-1 mx-1">
                    {formik.errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="text-white buttonGrad mt-5 focus:outline-none uppercase rounded-2xl w-[180px] py-4 text-center"
              >
                {loader ? "" : "send"}
              </button>
            </form>
          </div>

          <article className="flex">
            <div className=" md:w-[400px] w-full">
              <article className="text-[2.2em] md2:text-[2.7em] lg:text-[3em] font-extrabold font-[GTWalsheimPro] ">
                Get In Touch
              </article>
              <p className="text-[#999] text-2xl">
                Let&apos;s bring that dream to reality together. That&apos;s why
                i&apos;m here.
              </p>
              <article className="mt-10 space-y-5">
                <article className="flex items-center space-x-3">
                  <div className="background w-fit rounded-full p-3">
                    <MdLocationOn className="text-[#ccc] text-[16px]" />
                  </div>
                  <p className="text-[#999] text-2xl">
                    Rumuokwurusi, Port Harcourt, Nigeria.
                  </p>
                </article>
                <article className="flex items-center space-x-3">
                  <div className="background w-fit rounded-full p-3">
                    <MdEmail className="text-[#ccc] text-[16px]" />
                  </div>
                  <p className="text-[#999] text-2xl">itzmeruz31@gmail.com</p>
                </article>
                <article className="flex items-center space-x-3">
                  <div className="background w-fit rounded-full p-3">
                    <MdLocalPhone className="text-[#ccc] text-[16px]" />
                  </div>
                  <p className="text-[#999] text-2xl">+234 811 0743 559</p>
                </article>
              </article>
            </div>
          </article>
        </div>
        {/* Form Ends */}
      </div>
    </section>
  );
}

export default Contact;
