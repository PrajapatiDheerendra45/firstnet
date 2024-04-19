


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed bg-opacity-80"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <section className="relative z-10 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-white">
              Manasvi Technologies OPC pvt. Ltd. is a leading Website and Mobile
              App Development Company with a team of professional developers
              dedicated to working with proficient coding skills and expertise
              that grabs consumers’ attention toward your business online.
            </p>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col mb-8">
                <ContactInfoItem
                  icon={faHome}
                  title="Address"
                  
                  content="Corporate office:- 111-B old Ashoka garden, 80 Feet road in front of hotel manpreet Bhopal"
                />
                <ContactInfoItem
                  icon={faPhone}
                  title="Phone"
                  content="(+91) 9302447001"
                />
                <ContactInfoItem
                  icon={faEnvelope}
                  title="Email"
                  content="manasvitech01@gmail.com"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactInfoItem = ({ icon, title, content }) => {
  return (
    <div className="flex items-center mb-4">
      <div style={{ background: "linear-gradient(to right, #8d5aec, #296fd8, #7d3be7)" }} className="rounded-full w-14 h-14 flex items-center justify-center">
  <FontAwesomeIcon icon={icon} className="text-2xl" />
</div>

      <div className="ml-4">
        <h4 className="text-2xl text-cyan-600">{title}</h4>
        <p className="text-white">{content}</p>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg">
      <form id="contact-form">
        <h2 className="text-3xl font-bold mb-6">Send Message</h2>
        <div className="mb-6">
          <input
            type="text"
            required
            className="w-full border-b-2 border-gray-400 focus:border-cyan-600 outline-none py-2"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            required
            className="w-full border-b-2 border-gray-400 focus:border-cyan-600 outline-none py-2"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <textarea
            required
            className="w-full border-b-2 border-gray-400 focus:border-cyan-600 outline-none py-2"
            rows="4"
            placeholder="Type your Message..."
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            value="Send"
            style={{ background: "linear-gradient(to right, #8d5aec, #296fd8, #7d3be7)" }}
            className="w-full bg-cyan-600 text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-cyan-600 transition duration-300"
          />
        </div>
      </form>
    </div>
  );
};



