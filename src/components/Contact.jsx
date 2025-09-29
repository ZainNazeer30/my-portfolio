import React, { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/contact/", formData);
      alert("Message sent successfully!");
      handleReset(); // clear form after submit
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }
  };

  return (
    <section className="contact">
      <h2>Get in touch</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Contact No</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <div className="button-groups">
          <button type="submit">Send</button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
