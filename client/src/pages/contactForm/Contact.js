import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
// import customer from "../../assets/customers.mp4";
import "./contact.css";
import customer from "../../assets/customers.mp4";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5tp0xoh",
        "template_930s8ne",
        form.current,
        "r7bKStIwYjjrS4Wfu"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="formBox">
      <div className="background">
      <video src={customer} className="contactVideo" autoPlay loop muted />
      </div>
      <div class="secHeader">
        <h2 className="contact">Contact Us:</h2>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
export default Contact;