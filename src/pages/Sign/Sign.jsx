import { useState } from "react";
import styles from "./Sign.module.scss";

const ClapperIcon = () => (
  <svg
    width="38"
    height="32"
    viewBox="0 0 38 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0" y="9" width="38" height="23" rx="3" fill="#FF4D4D" />
    <rect x="0" y="9" width="38" height="7" fill="#d93f3f" />
    <polygon points="4,9 9,9 11,0 6,0" fill="#FF4D4D" />
    <polygon points="13,9 18,9 20,0 15,0" fill="#FF4D4D" />
    <polygon points="22,9 27,9 29,0 24,0" fill="#FF4D4D" />
    <polygon points="30,9 36,9 38,0 33,0" fill="#FF4D4D" />
    <line x1="0" y1="9" x2="38" y2="9" stroke="#b83333" strokeWidth="1" />
  </svg>
);

export default function SignUp() {
  const [form, setForm] = useState({ email: "", password: "", repeat: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up:", form);
  };

  return (
    <div className={styles.page}>
      <div className={styles.logo}>
        <ClapperIcon />
      </div>

      <div className={styles.card}>
        <h1 className={styles.title}>Sign Up</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="password"
              name="repeat"
              placeholder="Repeat password"
              value={form.repeat}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>

          <button className={styles.button} type="submit">
            Create an account
          </button>
        </form>

        <p className={styles.footer}>
          Already have an account?{" "}
          <a href="/login" className={styles.link}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
