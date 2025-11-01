import { useEffect, useRef } from 'react';
import styles from './Programs.module.css';

export default function Programs() {
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

  const programs = [
    {
      title: 'Guest Lecture Series',
      description: 'Gain insights on industry-academia synergy, IP commercialization, startup journeys, and cutting-edge research from expert leaders.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h20v14H2z"/>
          <path d="M8 21h8"/>
          <path d="M12 17v4"/>
        </svg>
      )
    },
    {
      title: 'Innovation Index',
      description: 'Our annual scoring of college R&D, IP, and startup activity, driving healthy competition and national recognition for institutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
          <path d="m9 14 2 2 4-4"/>
        </svg>
      )
    },
    {
      title: 'Mentor Connect',
      description: 'A cross-college platform giving students direct access to a national network of industry mentors, research advisors, and investors.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      title: 'IP to Impact Bootcamps',
      description: 'Specialized training to help students and faculty turn patents and research ideas into viable, market-ready ventures.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
        </svg>
      )
    },
    {
      title: 'Startup Clinics',
      description: 'Hands-on assistance with incubator partnerships, investor matchmaking, and corporate accelerator programs to get your venture funded.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5.7 13.3 3.4-3.4a1.5 1.5 0 0 0-2.1-2.1l-3.4 3.4c-.4.4-.6 1-.6 1.6 0 .6.2 1.2.6 1.6l3.4 3.4a1.5 1.5 0 0 0 2.1-2.1l-3.4-3.4c-.1-.1-.1-.1 0 0z"/>
          <path d="m12.7 13.3 3.4-3.4a1.5 1.5 0 0 0-2.1-2.1l-3.4 3.4c-.4.4-.6 1-.6 1.6 0 .6.2 1.2.6 1.6l3.4 3.4a1.5 1.5 0 0 0 2.1-2.1l-3.4-3.4c-.1-.1-.1-.1 0 0z"/>
          <path d="m18.7 13.3 3.4-3.4a1.5 1.5 0 0 0-2.1-2.1l-3.4 3.4c-.4.4-.6 1-.6 1.6 0 .6.2 1.2.6 1.6l3.4 3.4a1.5 1.5 0 0 0 2.1-2.1l-3.4-3.4c-.1-.1-.1-.1 0 0z"/>
        </svg>
      )
    },
    {
      title: 'Scalable SIPE Model',
      description: 'We deploy student chapters with dedicated cells for events, outreach, and fundraising, creating a sustainable innovation ecosystem on campus.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line y1="12" x2="12" y2="22" x1="12"/>
        </svg>
      )
    }
  ];

  return (
    <section id="programs" className="section bg-light" ref={scrollAnimationRef}>
      <div className="section-content">
        <h2 className="section-title">Programs & Offerings</h2>
        <p className="section-subtitle">
          Comprehensive initiatives to foster innovation from the classroom to the marketplace.
        </p>
        <div className={styles.cardsGrid}>
          {programs.map((program, index) => (
            <div key={index} className={`${styles.card} animate-on-scroll`}>
              <div className={styles.icon}>{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
