import { motion } from "framer-motion";
import "../styles/footer.css";

export default function Footer() {
  const socials = [
    { icon: "/icons/github.png", link: "https://github.com/Mohammadsoleiman" },
    { icon: "/icons/linkedin.png", link: "https://linkedin.com/in/yourprofile" },
    { icon: "/icons/email.png", link: "mailto:yourgmail@gmail.com" }
  ];

  return (
    <footer className="footer">

      <p className="footer-name">
        Mohammad <span>•</span> Developer
      </p>

      <div className="footer-icons">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.link}
            target="_blank"
            whileHover={{ scale: 1.25 }}
            transition={{ duration: 0.25 }}
          >
            <img src={s.icon} alt="social icon" className="social-icon" />
          </motion.a>
        ))}
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} All Rights Reserved
      </p>

    </footer>
  );
}
