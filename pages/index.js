import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Programs from '../components/home/Programs';
import Events from '../components/home/Events';
import Mentors from '../components/home/Mentors';
import FAQ from '../components/home/FAQ';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title="SIPE - Society of Innovation and Professional Excellence">
      <Hero />
      <About />
      <Programs />
      <Events />
      <Mentors />
      <section id="join" className="section bg-light">
        <div className="section-content" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Start Your Journey</h2>
          <p className="section-subtitle">
            Ready to join the innovation revolution? Become a part of our growing network today.
          </p>
          <Link href="/login-student" className={styles.joinBtn}>
            Join Our Community
          </Link>
        </div>
      </section>
      <FAQ />
    </Layout>
  );
}
