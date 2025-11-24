// src/components/contact/WorkingHours.jsx
import { motion } from "framer-motion";
import "./WorkingHours.css";

export default function WorkingHours() {
  const hours = [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM EAT" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM EAT" },
    { day: "Sunday", time: "10:00 AM – 2:00 PM EAT" },
    { day: "Public Holidays", time: "10:00 AM – 2:00 PM EAT" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="working-hours"
      aria-labelledby="working-hours-title"
    >
      <h3 id="working-hours-title" className="working-hours-title">
        We’re Here for You
      </h3>

      <ul className="working-hours-list">
        {hours.map((item, index) => (
          <li key={index} className="working-hours-item">
            <span className="working-hours-day">{item.day}</span>
            <time className="working-hours-time">{item.time}</time>
          </li>
        ))}
      </ul>

      <p className="working-hours-note">
        Replies within <strong>2 hours</strong> during operating times • After-hours messages answered first thing next morning
      </p>
    </motion.section>
  );
}