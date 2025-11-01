import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/LoginStudent.module.css';

export default function LoginStudent() {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({
      type: 'success',
      text: isLogin
        ? 'Login functionality coming soon!'
        : 'Registration functionality coming soon!'
    });
  };

  return (
    <>
      <Head>
        <title>{isLogin ? 'Student Login' : 'Student Registration'} | SIPE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <div className={styles.container}>
        <div className={styles.authBox}>
          {message.text && (
            <div className={`${styles.message} ${styles[message.type]}`}>
              {message.text}
            </div>
          )}

          {isLogin ? (
            <div className={styles.formContainer}>
              <div className={styles.header}>
                <h1>Welcome Back, Student!</h1>
                <p>
                  Log in to access your <span className={styles.logo}>SIPE</span>{' '}
                  dashboard.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className={styles.formControl}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className={styles.formControl}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button type="submit" className={styles.btnSubmit}>
                  Log In
                </button>
              </form>
              <p className={styles.toggleAuth}>
                Don&apos;t have an account?{' '}
                <a onClick={() => setIsLogin(false)}>Sign Up Here</a>
              </p>
            </div>
          ) : (
            <div className={styles.formContainer}>
              <div className={styles.header}>
                <h1>Create Your Student Account</h1>
                <p>
                  Join <span className={styles.logo}>SIPE</span> and start your
                  journey.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className={styles.formControl}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="signup-email">Email Address</label>
                  <input
                    type="email"
                    id="signup-email"
                    className={styles.formControl}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact">Contact Number</label>
                  <input
                    type="tel"
                    id="contact"
                    className={styles.formControl}
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="institution">Institution Name</label>
                  <select
                    id="institution"
                    className={styles.formControl}
                    required
                  >
                    <option value="" disabled>
                      Select your institution
                    </option>
                    <option value="IIITDM Jabalpur">IIITDM Jabalpur</option>
                    <option value="Jabalpur Engineering College (JEC)">
                      Jabalpur Engineering College (JEC)
                    </option>
                    <option value="Shri Ram Institute of Technology (SRIT)">
                      Shri Ram Institute of Technology (SRIT)
                    </option>
                    <option value="IIT Patna">IIT Patna</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="signup-password">Password</label>
                  <input
                    type="password"
                    id="signup-password"
                    className={styles.formControl}
                    placeholder="Create a strong password"
                    minLength={8}
                    required
                  />
                  <p className={styles.passwordHint}>
                    At least 8 characters
                  </p>
                </div>
                <button type="submit" className={styles.btnSubmit}>
                  Create Account
                </button>
              </form>
              <p className={styles.toggleAuth}>
                Already have an account?{' '}
                <a onClick={() => setIsLogin(true)}>Log In Here</a>
              </p>
            </div>
          )}

          <div className={styles.backToHome}>
            <Link href="/">← Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
