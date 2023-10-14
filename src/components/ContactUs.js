import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us-container align-middle">
      <h1 className="p-2 m-2 border-solid font-bold justify-center flex-1 text-3xl">
        Contact Us
      </h1>
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
