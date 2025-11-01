import { useState } from 'react';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the primary goal of SIPE?',
      answer: "SIPE's main goal is to create a standardized, nationwide framework for fostering innovation and entrepreneurship within educational institutions by connecting students with industry mentors, resources, and real-world projects."
    },
    {
      question: 'Who is eligible to join the SIPE network?',
      answer: 'Our program is designed for educational institutions across India. Once an institution partners with us, all of its students (UG, PG, and PhD) become eligible to join our chapters and access our complete range of programs and benefits.'
    },
    {
      question: 'How does the mentorship program work?',
      answer: 'We provide a cross-college Mentor Connect Platform that links students with experienced industry professionals, researchers (from DRDO, CSIR, etc.), and entrepreneurs based on their field of interest and project requirements for personalized guidance.'
    },
    {
      question: 'How can our institution partner with SIPE?',
      answer: 'To partner with us, please use the "Join Now" button to navigate to our registration portal and sign up as an institution. Our outreach team will then get in touch with you to finalize the partnership process and establish a SIPE chapter on your campus.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="section-content">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Everything you need to know about SIPE</p>
        <div className={styles.faq}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              <div className={`${styles.faqAnswer} ${activeIndex === index ? styles.show : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
