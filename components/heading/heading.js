import styles from "./heading.module.css";

export default function Heading({ children }) {
  return (
    <>
      <div className={styles.heading}>{children}</div>
    </>
  );
}
