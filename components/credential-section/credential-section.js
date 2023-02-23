import styles from "./credential-section.module.css";
import Heading from "../heading/heading";
import Credential from "../credential/credential";
import Social from "../social/social";

export default function CredentialSection() {
  return (
    <>
      <div className={styles.container}>
        <Heading>DELTA HEDGE</Heading>
        <div className={styles.credentials}>
          <Credential src="./email.svg" color="#ffffff">
            georgios.tzoumakas@yahoo.com
          </Credential>

          <Credential src="./phone.svg" color="#ffffff">
            +4407548183981
          </Credential>
        </div>

        <div className={styles.tray}>
          <a href="https://twitter.com/greekdubliner?s=11&t=OQ2uFZN1g8OylObIua6zdg">
            <Social src="./twitter.svg" />{" "}
          </a>

          <a href="https://www.linkedin.com/in/georgios-tzoumakas-99266397">
            <Social src="./linkedin.svg" />
          </a>
        </div>
      </div>
    </>
  );
}
