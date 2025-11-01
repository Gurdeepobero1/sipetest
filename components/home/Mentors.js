import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Mentors.module.css';

export default function Mentors() {
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

  const mentors = [
    {
      name: 'Dr. Sudhir Mishra',
      title: 'Ex. DG DRDO, CEO & MD\nBrahMos',
      image: '/images/DSC_0573.JPG'
    },
    {
      name: 'Mr. E R Sheikh',
      title: 'Ex. Director General\nOrdinance Factory Board',
      image: '/images/ofb.png'
    },
    {
      name: 'Mr. Sanjeev Bhola',
      title: 'Chief General Manager, AVNL\nMinistry of Defence',
      image: '/images/skbhola.png'
    },
    {
      name: 'Mr. Atul Singh (IPS)',
      title: 'Deputy Inspector General\nJabalpur Range',
      image: '/images/atul-singh.png'
    },
    {
      name: 'Dr. Rajeev Chandak',
      title: 'Principal\nJEC Jabalpur',
      image: '/images/sipe.png'
    },
    {
      name: 'Prof. Bhartendu K Singh',
      title: 'Director\nIIITDM Jabalpur',
      image: '/images/prof-bhartendu-k-singh.jpg'
    }
  ];

  return (
    <section id="mentors" className="section" ref={scrollAnimationRef}>
      <div className="section-content">
        <h2 className="section-title">Our Esteemed Mentors</h2>
        <p className="section-subtitle">
          Learn from leaders and visionaries dedicated to nurturing the next generation of innovators.
        </p>
        <div className={styles.mentorsGrid}>
          {mentors.map((mentor, index) => (
            <div key={index} className={`${styles.mentorCard} animate-on-scroll`}>
              <Image
                src={mentor.image}
                alt={mentor.name}
                width={120}
                height={120}
                className={styles.mentorImage}
              />
              <h4>{mentor.name}</h4>
              <p>{mentor.title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < mentor.title.split('\n').length - 1 && <br />}
                </span>
              ))}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
