import Image from 'next/image';
import Link from 'next/link';
import styles from './Gallery.module.css';

export default function Gallery() {
  const featuredImages = [
    { src: '/images/impactcon1.png', alt: 'ImpactCon Event' },
    { src: '/images/SM1.png', alt: 'Dr. Sudhir Mishra Visit' },
    { src: '/images/R1.png', alt: 'Robotics Workshop' },
    { src: '/images/inaugural-ceremony-sipe.png', alt: 'SIPE Inaugural Ceremony' },
    { src: '/images/impactcon5.png', alt: 'ImpactCon Panel Discussion' },
    { src: '/images/T1.png', alt: 'T.I.M.E Session' },
  ];

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Events & Activities</h2>
        <p className={styles.subtitle}>
          Explore moments from our workshops, lectures, and networking events
        </p>
        <div className={styles.galleryGrid}>
          {featuredImages.map((image) => (
            <div key={image.src} className={styles.galleryCard}>
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className={styles.galleryImage}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.overlay}>
                <span className={styles.viewIcon}>+</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ctaContainer}>
          <Link href="/gallery" className={styles.viewAllBtn}>
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
