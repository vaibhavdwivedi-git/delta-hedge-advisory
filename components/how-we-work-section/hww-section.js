import styles from "./hww-section.module.css";
import SubHeading from "../sub-heading/sub-heading";

export default function HWSection() {
  return (
    <>
      <div className={styles.container}>
        <SubHeading>HOW WE WORK</SubHeading>
        <div className={styles.about}>
          The clients are unique in their requirements and we adapt accordingly.
          Our time, expertise and network are all available to benefit you. We
          can join your business as board advisors, or come onboard as a
          consultant to handle one-off and time-critical projects for your
          business.
          <br />
          Whatever your ambitions or challenges, together I have no doubt that
          we can achieve them, and more.
        </div>
      </div>
    </>
  );
}
