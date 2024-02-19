import React from "react";
import { FaLinkedin, FaYoutube , FaInstagram } from "react-icons/fa"; // Importing Flat Icons
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:dimpleprithwani@gmail.com">saying hi</a>
          </span>
          <br/>
          <div className={css.socialIcons} >
            <a href="https://www.linkedin.com/in/dimple-prithwani-digital-marketer/" target="_blank" rel="noopener noreferrer" style={{paddingLeft:10, paddingTop:50}}>
              <FaLinkedin size={40}  color="blue"/>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={{paddingLeft:10,paddingTop:30}}>
              <FaYoutube size={40} color="red"/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{paddingLeft:10,paddingTop:30}}>
              <FaInstagram size={40} />
            </a>
          </div>
        </div>
        

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contact Me</span>
            <p>Pune, Maharashtra</p>
            <p style={{ color: 'orange', paddingTop: '10px', fontWeight: '500' }}>7020727854</p>
            <p style={{ color: 'green', paddingTop: '10px' }}>dimpleprithwani@gmail.com</p>
          </div>

          {/* Social Icons using Flat Icons */}
      

          <ul className={css.menu}>
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
