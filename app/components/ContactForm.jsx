"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoCloseCircleOutline } from "react-icons/io5";

function ContactForm() {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // email service ID -- # at end for testing purposes to fail submission.
        "service_388e5t8#",
        // email template ID
        "template_5v57j5m",
        form.current,
        // public key
        "wAwJXjWoiFOmC3Ema"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setIsError(true);
        }
      );
  };
  const closeSuccessAlert = () => {
    setIsSuccess(false);
  };
  const closeErrorAlert = () => {
    setIsError(false);
  };
  return (
    <main>
      {isSuccess && (
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your message has been sent successfully</span>
          <div>
            <button className="text-3xl cursor-pointer" onClick={closeSuccessAlert}>
              <IoCloseCircleOutline />
            </button>
          </div>
        </div>
      )}
      {isError && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            Error sending your message. Please try again later or email us:
            text@gmail.com
          </span>
          <div>
            <p className="text-3xl cursor-pointer" onClick={closeErrorAlert}>
              <IoCloseCircleOutline />
            </p>
          </div>
        </div>
      )}
      <form ref={form} onSubmit={sendEmail}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            name="from_name"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email Address</span>
          </div>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            name="from_email"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Your Message</span>
          </div>
          <textarea
            className="textarea textarea-bordered"
            name="message"
            required
          />
        </label>
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          type="submit"
          value="send"
        >
          send
        </button>
      </form>
    </main>
  );
}

export default ContactForm;
