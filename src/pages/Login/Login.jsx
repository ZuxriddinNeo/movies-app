import { useState } from "react";
import styles from "../Login/Login.module.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login:", { email, password });
  };

  return (
    <div className={styles.page}>
      <div className={styles.logoWrapper}>
        <svg
          className={styles.logo}
          viewBox="0 0 36 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="8" width="36" height="20" rx="2" fill="#FF4D4D" />

          <rect x="0" y="0" width="36" height="8" rx="2" fill="#FF4D4D" />
  
          <line x1="6" y1="0" x2="2" y2="8" stroke="#1a2232" strokeWidth="3" />
          <line x1="14" y1="0" x2="10" y2="8" stroke="#1a2232" strokeWidth="3" />
          <line x1="22" y1="0" x2="18" y2="8" stroke="#1a2232" strokeWidth="3" />
          <line x1="30" y1="0" x2="26" y2="8" stroke="#1a2232" strokeWidth="3" />
        </svg>
      </div>


      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>

        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className={styles.button} onClick={handleLogin}>
            Login to your account
          </button>

          <p className={styles.signupText}>
            Don't have an account?{" "}
            <a href="#" className={styles.signupLink}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}