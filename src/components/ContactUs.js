import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const ContactUs = () => {
  const details = {
    name: "Kushal Seth",
    bio: "NodeJS ReactJS Fullstack Developer",
    contact: {
      email: "kushalseth1408@gmail.com",
      github: "https://github.com/kushalseth",
      linkedin: "https://www.linkedin.com/in/sethkushal/",
      stackoverflow: "https://stackoverflow.com/users/4393351/kushalseth",
    },
  };

  return (
    <div className="contact-us-container align-middle">
      <h1 className="p-2 m-2 border-solid font-bold justify-center flex-1 text-3xl">
        Contact Us
      </h1>
      <div className="container-max min-h-screen p-4 m-4">
        <div>
          <h2 className="text-xl font-semibold">
            Hi 👋, I'm {details.name} 👩‍💻
          </h2>
          <p className="text-lg">{details.bio}</p>

          <div className="my-4 space-y-2">
            <h3 className="text-lg font-semibold">Connect with me</h3>
            <p className="flex flex-wrap items-center gap-2">
              <span className="font-semibold">Gmail: </span>
              <a
                href={details.contact.email}
                className="flex items-center gap-1"
              >
                {details.contact.email}
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </p>
            <p className="flex flex-wrap items-center gap-2">
              <span className="font-semibold">Github: </span>{" "}
              <a
                href={details.contact.github}
                className="flex items-center gap-1"
              >
                {details.contact.github}
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </p>
            <p className="flex flex-wrap items-center gap-2">
              <span className="font-semibold">Linkedin: </span>{" "}
              <a
                href={details.contact.linkedin}
                className="flex items-center gap-1"
              >
                {details.contact.linkedin}
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </p>
            <p className="flex flex-wrap items-center gap-2">
              <span className="font-semibold">Stackoverflow: </span>{" "}
              <a
                href={details.contact.stackoverflow}
                className="flex items-center gap-1"
              >
                {details.contact.stackoverflow}
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </p>
          </div>
        </div>
      </div>

      <form className="flex flex-col">
        <div className="m-2 p-2 flex flex-wrap items-center">
          <label className="m-2 p-2">Name:</label>
          <input className="m-2 p-2" placeholder="Name" />
        </div>
        <div className="m-2 p-2 flex flex-wrap items-center">
          <label className="m-2 p-2">Message:</label>
          <textarea cols={25} rows={6} placeholder="Message" />
        </div>
        <div className="m-2 p-2 flex flex-wrap items-center">
          <button
            placeholder="Submit"
            className="border border-black bg-orange-200 rounded-lg m-2 p-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
