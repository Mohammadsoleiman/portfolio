import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { profile } from "../data/profile";
import "../styles/contact.css";

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

function getSendErrorMessage(error) {
  const status = error?.status;
  const text = typeof error?.text === "string" ? error.text : "";

  if (status === 412 || /invalid grant|reconnect your gmail/i.test(text)) {
    return `Could not send email right now (mail provider authorization expired). Please email me directly at ${profile.email}.`;
  }

  if (status === 403 || /API access from non-browser|blocked/i.test(text)) {
    return "Could not send email due to EmailJS security settings. Please email me directly.";
  }

  if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
    return "Email service is not configured. Please set EmailJS environment variables.";
  }

  return "Failed to send message. Please try again or email me directly.";
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const isSubmittingRef = useRef(false);
  const statusTimeoutRef = useRef(null);

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.message.trim()) errors.message = "Message is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Sync lock blocks double-submit before React re-renders disabled state
    if (isSubmittingRef.current || isSubmitting) return;

    if (statusTimeoutRef.current) {
      clearTimeout(statusTimeoutRef.current);
      statusTimeoutRef.current = null;
    }
    setSubmitStatus({ success: false, message: '' });

    if (!validateForm()) return;

    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
      if (import.meta.env.DEV) {
        console.error("[Contact] Missing EmailJS env vars (VITE_EMAILJS_SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY).");
      }
      setSubmitStatus({
        success: false,
        message: "Email service is not configured. Please set EmailJS environment variables."
      });
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          reply_to: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          to_name: 'Mohammad Soleiman',
          to_email: profile.email,
        },
        { publicKey: EMAILJS_CONFIG.publicKey }
      );

      setSubmitStatus({
        success: true,
        message: "Message sent successfully! I'll get back to you soon."
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormErrors({});
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("[Contact] EmailJS send failed", {
          status: error?.status,
          text: typeof error?.text === "string" ? error.text : undefined,
        });
      }
      setSubmitStatus({
        success: false,
        message: getSendErrorMessage(error),
      });
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
      statusTimeoutRef.current = setTimeout(() => {
        setSubmitStatus({ success: false, message: '' });
        statusTimeoutRef.current = null;
      }, 8000);
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
                {formErrors.name && <p className="error-message">{formErrors.name}</p>}
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
                {formErrors.email && <p className="error-message">{formErrors.email}</p>}
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
                {formErrors.subject && <p className="error-message">{formErrors.subject}</p>}
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
                {formErrors.message && <p className="error-message">{formErrors.message}</p>}
              </div>

              <div className="form-status" aria-live="polite">
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
              
              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                whileHover={isSubmitting ? undefined : { scale: 1.02 }}
                whileTap={isSubmitting ? undefined : { scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      ⏳
                    </motion.span>
                    Sending...
                  </span>
                ) : (
                  'Send Message 🚀'
                )}
              </motion.button>
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