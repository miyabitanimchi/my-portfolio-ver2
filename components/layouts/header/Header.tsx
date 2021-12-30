import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <header className={styles.header}>
      <nav>
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
    </header>
  );
};

export default Header;
