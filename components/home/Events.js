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
            <div className={styles.upcomingEventDate}>
              <div className={styles.month}>Nov</div>
              <div className={styles.day}>04</div>
              <div className={styles.year}>2025</div>
            </div>
            <div className={styles.upcomingEventInfo}>
              <h3>Inaugural Lecture Series Kick-off</h3>
              <p>
                Join us for the first session of our Guest Lecture Series, featuring industry pioneers and academic visionaries.
              </p>
              <Link href="/login-student" className={styles.joinBtn}>
                Register Now
              </Link>
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
                <Image
                  src={event.image}
                  alt={event.title}
                  className={styles.eventCardImg}
                  width={400}
                  height={300}
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
