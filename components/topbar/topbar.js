import styles from "./topbar.module.css";

export default function Topbar({ onclick }) {
  return (
    <>
      <div className={styles.container}>
        <img src="./logo-white.png" className={styles.logo} />
        <img
          src="./burger-white.svg"
          className={styles.menu}
          onClick={onclick}
        />
      </div>
    </>
  );
}
