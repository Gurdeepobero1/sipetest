import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// Lazy load below-the-fold components for better performance
const Programs = dynamic(() => import('../components/home/Programs'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const Partners = dynamic(() => import('../components/home/Partners'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const Events = dynamic(() => import('../components/home/Events'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const Gallery = dynamic(() => import('../components/home/Gallery'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const Mentors = dynamic(() => import('../components/home/Mentors'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const FAQ = dynamic(() => import('../components/home/FAQ'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

export default function Home() {
  return (
    <Layout title="SIPE - Society of Innovation and Professional Excellence">
      <Hero />
      <About />
      <Programs />
      <Partners />
      <Events />
      <Gallery />
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
