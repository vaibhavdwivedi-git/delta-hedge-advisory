import styles from "./topbar2.module.css";

export default function Topbar2({ onclick }) {
  return (
    <>
      <div className={styles.container}>
        <img src="./logo-small.svg" className={styles.logo} />
        <img src="./burger.svg" className={styles.menu} onClick={onclick} />
      </div>
    </>
  );
}
