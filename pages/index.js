import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// Loading placeholder for lazy-loaded components
const LoadingPlaceholder = () => <div style={{ minHeight: '400px' }} />;

// Lazy load below-the-fold components for better performance
const Programs = dynamic(() => import('../components/home/Programs'), {
  loading: LoadingPlaceholder,
});

const Partners = dynamic(() => import('../components/home/Partners'), {
  loading: LoadingPlaceholder,
});

const Events = dynamic(() => import('../components/home/Events'), {
  loading: LoadingPlaceholder,
});

const Gallery = dynamic(() => import('../components/home/Gallery'), {
  loading: LoadingPlaceholder,
});

const Mentors = dynamic(() => import('../components/home/Mentors'), {
  loading: LoadingPlaceholder,
});

const FAQ = dynamic(() => import('../components/home/FAQ'), {
  loading: LoadingPlaceholder,
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
