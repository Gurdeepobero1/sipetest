import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Gallery.module.css';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeEvent, setActiveEvent] = useState('');

  const galleries = {
    impactcon: {
      title: 'ImpactCon Event',
      subtitle: 'Featuring Lt. Gen. Sanjay Sethi and other esteemed guests',
      images: [
        '/images/impactcon1.png',
        '/images/impactcon2.png',
        '/images/impactcon3.png',
        '/images/impactcon4.png',
        '/images/impactcon5.png',
        '/images/impactcon6.png',
        '/images/impactcon7.png',
        '/images/impactcon8.png',
        '/images/impactcon9.png'
      ]
    },
    session: {
      title: 'First Session of SIPE',
      subtitle: 'Our foundational meeting and first member gathering',
      images: [
        '/images/P1.jpeg',
        '/images/P2.jpeg'
      ]
    },
    mishra: {
      title: 'Visit by Dr. Sudhir Mishra',
      subtitle: 'An inspiring session with the Ex. DG DRDO, CEO & MD of BrahMos',
      images: [
        '/images/SM1.png',
        '/images/SM2.png',
        '/images/SM3.png',
        '/images/SM4.png'
      ]
    },
    robotics: {
      title: 'Robotics & Drive Systems Workshop',
      subtitle: 'Hands-on learning experience with advanced robotics',
      images: [
        '/images/R1.png',
        '/images/R2.png',
        '/images/R3.png'
      ]
    },
    time: {
      title: 'T.I.M.E Jabalpur Session',
      subtitle: 'Educational and career guidance session',
      images: [
        '/images/T1.png',
        '/images/T2.png',
        '/images/T3.png'
      ]
    }
  };

  const openLightbox = (eventKey, imageIndex = 0) => {
    const gallery = galleries[eventKey];
    if (gallery && gallery.images.length > 0) {
      setCurrentGallery(gallery.images);
      setCurrentIndex(imageIndex);
      setActiveEvent(eventKey);
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

  return (
    <>
      <Head>
        <title>Gallery - SIPE Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.pageHeader}>
          <div className={styles.container}>
            <h1 className={styles.pageTitle}>Our Event Gallery</h1>
            <p className={styles.pageSubtitle}>
              A visual journey through our workshops, lectures, and events
            </p>
          </div>
        </section>

        {Object.entries(galleries).map(([key, event], index) => (
          <section
            key={key}
            className={`${styles.eventSection} ${index % 2 === 1 ? styles.bgLight : ''}`}
          >
            <div className={styles.container}>
              <h2 className={styles.eventTitle}>{event.title}</h2>
              <p className={styles.eventSubtitle}>{event.subtitle}</p>

              <div className={styles.imageGrid}>
                {event.images.map((imgSrc, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={styles.imageCard}
                    onClick={() => openLightbox(key, imgIndex)}
                  >
                    <Image
                      src={imgSrc}
                      alt={`${event.title} - Image ${imgIndex + 1}`}
                      width={400}
                      height={300}
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay}>
                      <span className={styles.viewIcon}>+</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className={styles.backToHome}>
          <Link href="/" className={styles.backBtn}>
            ← Back to Home
          </Link>
        </section>
      </main>

      <Footer />

      {lightboxOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            ×
          </button>
          <button
            className={styles.lightboxPrev}
            onClick={(e) => {
              e.stopPropagation();
              showPrevImage();
            }}
          >
            ‹
          </button>
          <div className={styles.lightboxContent}>
            <span className={styles.lightboxCounter}>
              {currentIndex + 1} / {currentGallery.length}
            </span>
            <div className={styles.lightboxInfo}>
              {activeEvent && galleries[activeEvent] && (
                <h3>{galleries[activeEvent].title}</h3>
              )}
            </div>
            <Image
              src={currentGallery[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className={styles.lightboxImage}
              width={1200}
              height={800}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            className={styles.lightboxNext}
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
