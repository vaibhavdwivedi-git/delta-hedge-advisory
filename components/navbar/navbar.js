import styles from "./navbar.module.css";
import Credential from "../credential/credential";
import Social from "../social/social";

export default function Navbar({ onclick, about, w4, timeline, hw }) {
  return (
    <>
      <div className={styles.container}>
        <img
          src="./close-black.svg"
          className={styles.close}
          onClick={onclick}
        />

        <div className={styles.options}>
          <div className={styles.option} onClick={about}>
            ABOUT
          </div>
          <div className={styles.option} onClick={w4}>
            WHO WE WORK WITH
          </div>
          <div className={styles.option} onClick={hw}>
            HOW WE WORK
          </div>
        </div>

        <div className={styles.credentials}>
          <Credential src="./email-black.svg" color="#000000">
            georgios.tzoumakas@yahoo.com
          </Credential>

          <Credential src="./phone-black.svg" color="#000000">
            +4407548183981
          </Credential>

          <br />
          <br />

          <Credential src="./maps.png" color="#000000">
            Highway Tirana - Durrës,
            <br /> KM.1 Kashar,1001,Albania
          </Credential>

          <Credential src="./maps.png" color="#000000">
            5 Marylebone Street
            <br />
            London UK, W1G 8JD
          </Credential>
        </div>

        <div className={styles.tray}>
          <a href="https://twitter.com/greekdubliner?s=11&t=OQ2uFZN1g8OylObIua6zdg">
            <Social src="./twitter-black.svg" />{" "}
          </a>

          <a href="https://www.linkedin.com/in/georgios-tzoumakas-99266397">
            <Social src="./linkedin-black.svg" />
          </a>
        </div>
      </div>
    </>
  );
}
