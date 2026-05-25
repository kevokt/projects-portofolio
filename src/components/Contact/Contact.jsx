import React from "react";
import "./Contact.css";
import Lottie from "lottie-react";
import contactAnimation from "../../assets/lottie/contact.json";

// === React Icons ===
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="contact-section container">
      <div className="contact-row">
        {/* Text Content */}
        <div className="contact-content">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            Want to reach out? Here's My Contact! I’d love to connect! Feel free
            to reach out for collaborations, projects, or any questions.
          </p>
          <div className="contact-links">
            <a
              href="mailto:kevinoktaviandev@gmail.com"
              className="custom-button-main email-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdMail className="contact-icon" />
              Email
            </a>
            <a
              href="https://wa.me/6281213577546"
              className="custom-button-main whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="contact-icon" />
              Whatsapp
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="contact-image">
          <Lottie
            animationData={contactAnimation}
            loop={true}
            className="lottie"
          />
        </div>
      </div>
      <a id="contact"></a>
    </section>
  );
};

export default Contact;
