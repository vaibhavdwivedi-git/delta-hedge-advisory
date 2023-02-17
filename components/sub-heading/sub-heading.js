import styles from "./sub-heading.module.css";

export default function SubHeading({ children }) {
  return (
    <>
      <div className={styles.heading}>{children}</div>
    </>
  );
}
