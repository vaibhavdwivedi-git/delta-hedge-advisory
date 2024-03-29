import styles from "./about-section.module.css";
import SubHeading from "../sub-heading/sub-heading";

export default function AboutSection() {
  return (
    <>
      <SubHeading>ABOUT US</SubHeading>
      <div className={styles.about}>
        Two young wannapreneurs met originally in Boston,MA in 2016. Having
        achieved extensive work experience in the financial services sector
        accompanied  by academic excellence they are here to dig into your
        problem for your business in Western Balkans.
        <br />
        <br />
        Having completed and participated on buy and sell side deals in Northern
        Europe with enterprise values varied from £10M to £400M, Lefteris and
        George continue this successive journey under which they are willing to
        help early and well - established firms with long term propositions and
        solid and concrete advices.
      </div>
    </>
  );
}

/**
 * 
   <div className={styles.about}>
        Our portfolio includes board advisory, consultancy and project roles for
        a range of business, sectors and agencies.
        <br />
        <br />
        We bring an ultra effective, practical and straight forward approach to
        doing business, supported where necessary by our trusted network of the
        very best people in the industry. So you can be confident and
        comfortable that we will know just the right fit for your business -
        across sectors.
        <br />
        <br />
        Lefteris from one side has a diversified investment management
        professional background, combining solid corporate experience in the
        financial services and biotechnology sectors. Lefteris worked and
        studied around multiple locations across Northern Europe and United
        States. While he was completing his studies in the United States, he
        created his own company named Swollet, which comprises the first Play to
        Earn platform in Europe.
        <br />
        <br />
        Georgios on the other side has multicultural background in the
        investment banking and technology industries. He completed his master
        studies at LSE while he was working for various agencies across UK.
        Georgios’s key highlight is related to his major contribution in the
        deal between Apex Group and Sanne - a leading global provider of
        alternative asset and corporate services.
      </div>
 */
