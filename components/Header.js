import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="#home" className={styles.logo}>
          SIPE
        </Link>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#programs">Programs</Link></li>
            <li><Link href="#upcoming-events">Upcoming</Link></li>
            <li><Link href="#events">Events</Link></li>
            <li><Link href="#mentors">Mentors</Link></li>
            <li><Link href="#faq">FAQs</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </nav>
        <Link href="/login-student" className={styles.joinBtn}>
          Login/Join Now
        </Link>
        <div 
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
        <Link href="#about" onClick={closeMobileMenu}>About</Link>
        <Link href="#programs" onClick={closeMobileMenu}>Programs</Link>
        <Link href="#upcoming-events" onClick={closeMobileMenu}>Upcoming</Link>
        <Link href="#events" onClick={closeMobileMenu}>Events</Link>
        <Link href="#mentors" onClick={closeMobileMenu}>Mentors</Link>
        <Link href="#faq" onClick={closeMobileMenu}>FAQs</Link>
        <Link href="/gallery" onClick={closeMobileMenu}>Gallery</Link>
        <Link href="/login-student" className={styles.joinBtn} onClick={closeMobileMenu}>
          Register
        </Link>
      </div>
    </header>
  );
}
