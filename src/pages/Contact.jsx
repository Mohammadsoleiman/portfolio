import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { profile } from "../data/profile";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_x7abc8i',
        'template_x9l2qfr',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Mohammad Soleiman'
        },
        'pUblIc_kEy_12345'
      );
      
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus({ success: false, message: '' }), 5000);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      content: profile.email,
      link: `mailto:${profile.email}`
    },
    {
      icon: "📱",
      title: "Phone",
      content: profile.phone,
      link: `tel:${profile.phone.replace(/\s/g, '')}`
    },
    {
      icon: "📍",
      title: "Location",
      content: profile.location,
      link: "#"
    }
  ];

  return (
    <motion.section 
      className="contact-section text-gray-900 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="contact-container">
        {/* Contact Info */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="info-card">
            <div className="info-header">
              <h2>Get In Touch</h2>
              <p>Feel free to reach out for collaborations or just a friendly hello</p>
            </div>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-content">
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <div className="social-links">
              <motion.a
                href={profile.links.github}
                className="social-link"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                🐙
              </motion.a>
              <motion.a
                href={profile.links.linkedin}
                className="social-link"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                💼
              </motion.a>
              <motion.a
                href={`mailto:${profile.email}`}
                className="social-link"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                📧
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="form-card">
            <div className="form-header">
              <h3>Send a Message</h3>
              <p>I typically respond within 24 hours</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder=" "
                  required
                />
                <label htmlFor="name" className="form-label">Your Name</label>
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className="form-label">Email Address</label>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder=" "
                  required
                />
                <label htmlFor="subject" className="form-label">Subject</label>
              </div>
              
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder=" "
                  required
                />
                <label htmlFor="message" className="form-label">Your Message</label>
              </div>
              
              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ⏳
                  </motion.span>
                ) : (
                  'Send Message 🚀'
                )}
              </motion.button>
              
              <div className="form-status">
                {submitStatus.message && (
                  <motion.p 
                    className={submitStatus.success ? "success-message" : "error-message"}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitStatus.message}
                  </motion.p>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Contact Particles */}
      <div className="contact-particles">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Map Visualization */}
      <div className="map-visualization">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--map-stroke)" strokeWidth="1"/>
          <circle cx="60" cy="40" r="3" fill="var(--map-accent-a)"/>
          <circle cx="40" cy="60" r="3" fill="var(--map-accent-b)"/>
          <path d="M60,40 Q50,50 40,60" stroke="var(--map-link)" fill="none" strokeWidth="0.5"/>
        </svg>
      </div>
    </motion.section>
  );
}