import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    e.preventDefault();

   emailjs.send(
  "service_x7abc8i",     // Service ID
  "template_x9l2qfr",    // Template ID
  {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  },
  "pUblIc_kEy_12345"     // Public Key
)

  };

  return (
    <section className="contact">
      <motion.div 
        className="contact-box"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="contact-title">Let's Work Together 🤝</h1>

        <form onSubmit={sendMessage} className="contact-form">
          <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <button className="send-btn">Send Message 🚀</button>
        </form>

        {sent && <p className="sent-popup">✅ Sent Successfully!</p>}
      </motion.div>
    </section>
  );
}
