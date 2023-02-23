import styles from "./credential.module.css";

export default function Credential({ src, children, color }) {
  return (
    <>
      <div className={styles.credential} style={{ color: color }}>
        <img src={src} className={styles.credentialIcon} />
        <p>{children}</p>
      </div>
    </>
  );
}
