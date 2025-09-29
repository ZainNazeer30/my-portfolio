import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin,FaCopy } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const [copied, setcopied] = useState("");

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setcopied(type);
    setTimeout(() => setcopied(""), 2000);
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-top">
        <h3>Contact here</h3>
        <p>
          What’s next? Feel free to reach out to me if you are looking for a
          developer, have a query, or simply want to connect.
        </p>

        <div className="footer-contact">
          <div className="footer-items">
            <a href="mailto:your@email.com" className="footer-link">
              <FaEnvelope /> codezain6@email.com
            </a>
            <FaCopy
              className="copy-icon"
              onClick={() => copyToClipboard("codezain6@email.com", "email")}
            />
            {copied === "email" && <span className="copied-msg">Copied!</span>}
          </div>
          <div className="footer-items">
            <a href="tel:+923443470478" className="footer-link">
                <FaPhone /> +92 344 3470478
            </a>
            <FaCopy
              className="copy-icon"
              onClick={() => copyToClipboard("+923443470478", "phone")}
            />
            {copied === "phone" && <span className="copied-msg">Copied!</span>}
          </div>
        </div>
        <p className="social-text">You may also find me on these platforms!</p>
        <div className="footer-socials">
          <a
            href="https://github.com/ZainNazeer30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="http://www.linkedin.com/in/zain-nazeer-8300b536a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ZN Technologies | Designed & coded with
          ❤️ by Zain Nazeer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
