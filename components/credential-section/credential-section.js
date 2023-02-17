import styles from "./credential-section.module.css";
import Heading from "../heading/heading";
import Credential from "../credential/credential";
import Social from "../social/social";

export default function CredentialSection() {
  return (
    <>
      <div className={styles.container}>
        <Heading>DELTA HEDGE ADVISORY</Heading>
        <div className={styles.credentials}>
          <Credential
            src="./email.svg"
            text="georgios.tzoumakas@yahoo.com"
            color="#ffffff"
          />

          <Credential src="./phone.svg" text="+4407548183981" color="#ffffff" />
        </div>

        <div className={styles.tray}>
          <Social src="./twitter.svg" />
          <Social src="./linkedin.svg" />
        </div>
      </div>
    </>
  );
}
