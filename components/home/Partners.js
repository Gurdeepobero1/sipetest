import Image from 'next/image';
import styles from './Partners.module.css';

export default function Partners() {
  const partners = [
    { src: '/logos/jec.png', alt: 'JEC Jabalpur', width: 240, height: 72 },
    { src: '/logos/iitp.png', alt: 'IIT Patna', width: 240, height: 72 },
    { src: '/logos/iiitdmj.png', alt: 'IIITDM Jabalpur', width: 240, height: 72 },
    { src: '/logos/manit.png', alt: 'MANIT Bhopal', width: 240, height: 72 },
    { src: '/logos/nitrr.png', alt: 'NIT Raipur', width: 240, height: 72 },
    { src: '/logos/drdo.png', alt: 'DRDO', width: 240, height: 72 },
    { src: '/logos/brahmos.png', alt: 'BrahMos', width: 240, height: 72 },
    { src: '/logos/ofb.png', alt: 'OFB', width: 240, height: 72 },
  ];

  return (
    <section id="partners" className={styles.partnersSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Partners</h2>
        <p className={styles.subtitle}>
          Collaborating with leading institutions and organizations to drive innovation
        </p>
        <div className={styles.partnersGrid}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partnerCard}>
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                style={{ width: 'auto', height: '72px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
