import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { asPath } = useRouter();

  const toggleVisibility = () => {
    window && window.scrollY > window.innerHeight
      ? setIsVisible(true)
      : setIsVisible(false);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (asPath.includes('/works/')) {
      setIsVisible(true);
    } else {
      if (asPath === '/') setIsVisible(false);
      window && window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }
  }, [asPath]);

  return (
    <header className={styles.header}>
      {asPath.includes('/works/') ? (
        <Link href="/">
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
        </Link>
      ) : (
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
      )}
      <nav className={styles.nav}>
        <Link href="/#about" passHref>
          <p className={styles.menu}>About</p>
        </Link>
        <Link href="/#works" passHref>
          <p className={styles.menu}>Works</p>
        </Link>
        <Link href="/#contact" passHref>
          <p className={styles.menu}>Contact</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
