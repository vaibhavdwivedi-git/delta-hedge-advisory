import styles from "./w4-section.module.css";
import SubHeading from "../sub-heading/sub-heading";

export default function W4Section() {
  return (
    <>
      <div className={styles.container}>
        <SubHeading>WHO WE WORK WITH</SubHeading>
        <div className={styles.about}>
          Founded in 2022 by George and Lefteris started with a belief that
          ideas should be worth talking about. We believed that advisory should
          create “talkability” for clients' brands, products and services. We
          liked the word so much we trademarked it, and is proud it’s become
          part of the marketing lexicon – even if it is a term often borrowed
          (illegally!) by other agencies and advisories.
          <br />
          <br />
          We have partnered with PCB Partners and State Street where we were
          responsible for leading and expanding their consultancy practice. This
          includes the management of all PR pitches as well as developing new
          approaches to supporting both brands and PR consultancies.
          <br />
          <br />
          We are board advisor to leading F&B firm, Agna Group in Western
          Balkans, advising their marketing and operations teams to make
          strategic decision. We also sit on the sale side of business advising
          marketing services agencies who are looking for an exit.
          <br />
          <br />
          We are advisors to a number of high-growth businesses. These include:
          <br />
          <br />
          <span className={styles.italic}>
            Food and Beverage companies in Western Balkans
          </span>
          <br />
          <span className={styles.italic}>Fintech Companies</span>
          <br />
          <span className={styles.italic}>PR software business</span>
          <br />
          <span className={styles.italic}>
            Recruitment and assessment platform
          </span>
          <br />
          <span className={styles.italic}>Esports organisations</span>
        </div>
      </div>
    </>
  );
}
