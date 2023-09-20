import React from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lpen2jl",
        "template_7cny43g",
        e.target,
        "N8CG5vp80Y6GOCZYy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <Navbar/>
      <div className="cocc">
      <form onSubmit={sendEmail} className="contact-form">
        <div className="all-forms">
          <div className="name-form">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="email-form">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="subject-form">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="message-formmm">
            <textarea
              className="form-control"
              id=""
              cols="14"
              rows="4"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div className="boro">
            <button
              type="submit"
              id="submittt"
              className="btn btn-outline-dark"
            >
              Submit Message
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
