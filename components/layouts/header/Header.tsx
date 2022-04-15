import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import utilStyles from "../../../styles/utils.module.scss";

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    window && window.scrollY > window.innerHeight
      ? setIsVisible(true)
      : setIsVisible(false);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window && window.addEventListener("scroll", toggleVisibility);
    console.log(window.scrollY, window.innerHeight);
    console.log(isVisible);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <header className={styles.header}>
      <div
        className={` ${styles.logoWrap} ${
          isVisible ? styles.visible : styles.hidden
        } `}
        onClick={scrollTop}
      >
        <div
          className={`${utilStyles.gradientPinkBlue} ${utilStyles.gradientTextKit}`}
        >
          mt
        </div>
      </div>
      <nav className={styles.nav}>
        <Link href="/#about">
          <a className={styles.menu}>About</a>
        </Link>
        <Link href="/#works">
          <a className={styles.menu}>Works</a>
        </Link>
        <Link href="/#contact">
          <a className={styles.menu}>Contact</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
