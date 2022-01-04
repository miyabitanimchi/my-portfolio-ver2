import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "./Contact.module.scss";
import utilStyles from "../../../styles/utils.module.scss";

const ContactSection = () => (
  <section className={styles.contactSection} id="contact">
    <ScrollAnimation
      animateIn="animate__fadeInUp"
      delay={200}
      className={styles.contactWrap}
    >
      <p className={`${utilStyles.headingXlFixed} ${styles.contactTitle}`}>
        Please feel free to contact me!
      </p>
      <a
        href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Let%27s+talk&to=miyabitanimichi@gmail.com"
        className={`${utilStyles.heading3XlFixed} ${styles.emailLink} ${utilStyles.gradientGray} ${utilStyles.gradientTextKit}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        miyabitanimichi@gmail.com
      </a>
    </ScrollAnimation>
  </section>
);

export default ContactSection;
