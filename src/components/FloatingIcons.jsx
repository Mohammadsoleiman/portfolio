import { motion } from "framer-motion";

const backgroundIcons = [
  "/icons/html.png",
  "/icons/css.png",
  "/icons/js.png",
  "/icons/react.png",
  "/icons/node.png",
  "/icons/laravel.png",
];

export default function FloatingIcons() {
  return (
    <div className="floating-container">
      {backgroundIcons.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          className="floating-icon"
          style={{
            top: `${10 + i * 12}%`,
            left: `${8 + i * 15}%`,
          }}
          animate={{ y: ["0px", "-25px", "0px"] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
