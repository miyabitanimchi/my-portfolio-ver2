import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => (
  <nav className={styles.nav}>
    <Link href="/">
      <a className={styles.menu}>Home</a>
    </Link>
    <Link href="/works">
      <a className={styles.menu}>Works</a>
    </Link>
    <Link href="/about">
      <a className={styles.menu}>About</a>
    </Link>
  </nav>
);

export default Header;
