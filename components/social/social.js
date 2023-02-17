import styles from "./social.module.css";

export default function Social({ src }) {
  return (
    <>
      <img className={styles.social} src={src} />
    </>
  );
}
