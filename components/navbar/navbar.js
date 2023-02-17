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
          <div className={styles.option} onClick={timeline}>
            OUR TIMELINE
          </div>
          <div className={styles.option} onClick={hw}>
            HOW WE WORK
          </div>
        </div>

        <div className={styles.credentials}>
          <Credential
            src="./email-black.svg"
            text="georgios.tzoumakas@yahoo.com"
            color="#000000"
          />

          <Credential
            src="./phone-black.svg"
            text="+4407548183981"
            color="#000000"
          />
        </div>

        <div className={styles.tray}>
          <Social src="./twitter-black.svg" />
          <Social src="./linkedin-black.svg" />
        </div>
      </div>
    </>
  );
}
