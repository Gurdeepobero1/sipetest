import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Events.module.css';

export default function Events() {
  const scrollAnimationRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery data
  const allGalleries = {
    'gallery-1': [
      '/images/impactcon1.png',
      '/images/impactcon2.png',
      '/images/impactcon3.png',
      '/images/impactcon4.png',
      '/images/impactcon5.png',
      '/images/impactcon6.png',
      '/images/impactcon7.png',
      '/images/impactcon8.png',
      '/images/impactcon9.png'
    ],
    'gallery-2': ['/images/SM1.png', '/images/SM2.png', '/images/SM3.png', '/images/SM4.png'],
    'gallery-4': ['/images/R1.png', '/images/R2.png', '/images/R3.png'],
    'gallery-5': ['/images/T1.png', '/images/T2.png', '/images/T3.png']
  };

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, currentIndex, currentGallery]);

  const openLightbox = (galleryKey) => {
    if (allGalleries[galleryKey] && allGalleries[galleryKey].length > 0) {
      setCurrentGallery(allGalleries[galleryKey]);
      setCurrentIndex(0);
      setLightboxOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const showNextImage = () => {
    if (currentGallery.length === 0) return;
    setCurrentIndex((currentIndex + 1) % currentGallery.length);
  };

  const showPrevImage = () => {
    if (currentGallery.length === 0) return;
    setCurrentIndex((currentIndex - 1 + currentGallery.length) % currentGallery.length);
  };

  const events = [
    {
      gallery: 'gallery-1',
      image: '/images/impactcon7.png',
      title: 'Innaugural Ceremony'
    },
    {
      gallery: 'gallery-2',
      image: '/images/SM1.png',
      title: 'Lecture by Dr. Sudhir Mishra'
    },
    {
      gallery: 'gallery-4',
      image: '/images/R1.png',
      title: 'Robotics & Drive Systems Workshop'
    },
    {
      gallery: 'gallery-5',
      image: '/images/T1.png',
      title: 'T.I.M.E Jabalpur Session'
    }
  ];

  return (
    <>
      <section id="upcoming-events" className="section" ref={scrollAnimationRef}>
        <div className="section-content">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Don&apos;t miss our next big event. Register now to secure your spot!
          </p>

          <div className={`${styles.upcomingEventCard} animate-on-scroll`}>
            <div className={styles.eventTag}>Online Event</div>
            
            <div className={styles.upcomingEventHeader}>
              <div className={styles.upcomingEventDateBadge}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className={styles.upcomingEventDateText}>November 04, 2025</span>
              </div>
              
              <h3 className={styles.upcomingEventTitle}>
                Inaugural Lecture Series Kick-off
              </h3>
              
              <div className={styles.upcomingEventMeta}>
                <div className={styles.upcomingEventMetaItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>10:00 AM - 12:00 PM IST</span>
                </div>
                <div className={styles.upcomingEventMetaItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Virtual Event</span>
                </div>
              </div>
            </div>

            <div className={styles.upcomingEventBody}>
              <p className={styles.upcomingEventDescription}>
                Join us for the first session of our Guest Lecture Series, featuring industry pioneers and academic visionaries. This transformative event will explore the intersection of innovation, entrepreneurship, and academic excellence.
              </p>

              <div className={styles.upcomingEventDetails}>
                <div className={styles.upcomingEventDetail}>
                  <span className={styles.upcomingEventDetailLabel}>Speakers</span>
                  <span className={styles.upcomingEventDetailValue}>Industry Experts</span>
                </div>
                <div className={styles.upcomingEventDetail}>
                  <span className={styles.upcomingEventDetailLabel}>Duration</span>
                  <span className={styles.upcomingEventDetailValue}>2 Hours</span>
                </div>
                <div className={styles.upcomingEventDetail}>
                  <span className={styles.upcomingEventDetailLabel}>Registration</span>
                  <span className={styles.upcomingEventDetailValue}>Free Entry</span>
                </div>
              </div>

              <div className={styles.upcomingEventActions}>
                <Link href="/login-student" className={styles.joinBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="19" y1="8" x2="19" y2="14"></line>
                    <line x1="22" y1="11" x2="16" y2="11"></line>
                  </svg>
                  Register Now
                </Link>
                <a href="#events" className={styles.learnMoreBtn}>
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="section bg-light">
        <div className="section-content">
          <h2 className="section-title">Events Gallery</h2>
          <p className="section-subtitle">
            A visual journey through our workshops, lectures, and inaugural events. Click any event to see more.
          </p>

          <div className={styles.eventPortfolioGrid}>
            {events.map((event, index) => (
              <div
                key={index}
                className={`${styles.eventCard} animate-on-scroll`}
                onClick={() => openLightbox(event.gallery)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={event.image}
                  alt={event.title}
                  className={styles.eventCardImg}
                />
                <div className={styles.eventCardOverlay}>
                  <h3>{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            &times;
          </button>
          <button className={styles.lightboxPrev} onClick={(e) => { e.stopPropagation(); showPrevImage(); }}>
            &#10094;
          </button>
          <div className={styles.lightboxContent}>
            <span className={styles.lightboxCounter}>
              {currentIndex + 1} / {currentGallery.length}
            </span>
            <Image
              src={currentGallery[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className={styles.lightboxImage}
              width={1200}
              height={800}
              unoptimized
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button className={styles.lightboxNext} onClick={(e) => { e.stopPropagation(); showNextImage(); }}>
            &#10095;
          </button>
        </div>
      )}
    </>
  );
}
