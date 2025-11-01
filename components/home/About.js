import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  const scrollAnimationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = scrollAnimationRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section" ref={scrollAnimationRef}>
      <div className="section-content">
        <h2 className="section-title">Bridging Academia & Industry</h2>
        <p className="section-subtitle">
          SIPE&apos;s primary goal is to create a standardized, nationwide framework for fostering innovation and entrepreneurship within educational institutions. We connect students with industry mentors, resources, and real-world projects to transform groundbreaking ideas into impactful ventures.
        </p>

        <div className={`${styles.partnerCallout} animate-on-scroll`}>
          <h3>A Hub for Industry & Academia</h3>
          <div className={styles.partnerBenefits}>
            <div className={styles.partnerBenefit}>
              <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Access Top Talent
              </h4>
              <p>Connect with the brightest student innovators and researchers from our national network.</p>
            </div>
            <div className={styles.partnerBenefit}>
              <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
                Drive R&D
              </h4>
              <p>Collaborate on real-world projects and workshops to solve your industry challenges.</p>
            </div>
            <div className={styles.partnerBenefit}>
              <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Enhance Your Brand
              </h4>
              <p>Gain visibility as an industry leader committed to nurturing the next generation of excellence.</p>
            </div>
          </div>
        </div>

        <div className={styles.scrollerContainer}>
          <h3>Our Growing Network of Partner Institutions</h3>
          <div className={styles.collegeScroller}>
            <div className={styles.collegeScrollerInner}>
              <div className={styles.logoItem}><Image src="/logos/jec.png" alt="JEC Jabalpur Logo" width={240} height={72} style={{ width: 'auto', height: '72px' }} /></div>
              <div className={styles.logoItem}><Image src="/logos/iitp.png" alt="IIT Patna Logo" width={240} height={72} style={{ width: 'auto', height: '72px' }} /></div>
              <div className={styles.logoItem}><Image src="/logos/iiitdmj.png" alt="IIITDM Jabalpur Logo" width={240} height={72} style={{ width: 'auto', height: '72px' }} /></div>
              <div className={styles.logoItem}><Image src="/logos/jec.png" alt="JEC Jabalpur Logo" width={240} height={72} style={{ width: 'auto', height: '72px' }} /></div>
              <div className={styles.logoItem}><Image src="/logos/iitp.png" alt="IIT Patna Logo" width={240} height={72} style={{ width: 'auto', height: '72px' }} /></div>
              <div className={styles.logoItem}><Image src="/logos/iiitdmj.png" alt="IIITDM Jabalpur Logo" width={240} height={72} style={{ width: 'auto', height: '72px' }} /></div>
              <div className={styles.logoItem}><Image src="/logos/jec.png" alt="JEC Jabalpur Logo" width={240} height={72} style={{ width: 'auto', height: '72px' }} /></div>
              <div className={styles.logoItem}><Image src="/logos/iitp.png" alt="IIT Patna Logo" width={240} height={72} style={{ width: 'auto', height: '72px' }} /></div>
              <div className={styles.logoItem}><Image src="/logos/iiitdmj.png" alt="IIITDM Jabalpur Logo" width={240} height={72} style={{ width: 'auto', height: '72px' }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
