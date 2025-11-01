import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroGrid}>
        <div className={styles.heroText}>
          <h1>Empowering Student Innovation Across Indian Colleges</h1>
          <p>A student-driven, mentor-supported startup creating standardized innovation frameworks for educational institutions nationwide.</p>
          <Link href="/login-student" className={styles.joinBtn}>
            Get Started
          </Link>
        </div>
        <div className={styles.heroImageContainer}></div>
      </div>
    </section>
  );
}
