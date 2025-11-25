// src/components/common/SectionTitle.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './SectionTitle.css';

export default function SectionTitle({ children, centered = false, className = '' }) {
    return (
        <motion.div
            className={`section-title ${centered ? 'section-title--centered' : ''} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
            <h2 className="section-title__text">{children}</h2>
            <motion.div
                className="section-title__underline"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-50px' }}
            />
        </motion.div>
    );
}
