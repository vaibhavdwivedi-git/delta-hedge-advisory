import styles from "./timeline-section.module.css";
import SubHeading from "../sub-heading/sub-heading";

import { useState } from "react";

export default function TimelineSection() {
  const [pos, setPos] = useState([styles.timelineCanvas, styles.a]);

  const [visible, setVisible] = useState("a");

  const active = [styles.timelineController, styles.active];
  const inactive = [styles.timelineController, styles.inactive];

  async function slide(str) {
    await setVisible(str);
  }

  return (
    <>
      <div className={styles.container}>
        <SubHeading>OUR TIMELINE</SubHeading>

        <div className={styles.timelineScreen}>
          <div className={pos.join(" ")}>
            <div className={styles.timelineTile}>
              <div className={styles.year}>2018</div>
              <div className={styles.text}>
                Started on this year.It is one of the greatest company one has
                seen in recent past.Making progress in leaps and bounds.
              </div>
            </div>

            <div className={styles.timelineTile}>
              <div className={styles.year}>2019</div>
              <div className={styles.text}>
                Started on this year.It is one of the greatest company one has
                seen in recent past.Making progress in leaps and bounds.
              </div>
            </div>

            <div className={styles.timelineTile}>
              <div className={styles.year}>2020</div>
              <div className={styles.text}>
                Started on this year.It is one of the greatest company one has
                seen in recent past.Making progress in leaps and bounds.
              </div>
            </div>

            <div className={styles.timelineTile}>
              <div className={styles.year}>2021</div>
              <div className={styles.text}>
                Started on this year.It is one of the greatest company one has
                seen in recent past.Making progress in leaps and bounds.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.timelineBar}>
          <div
            onClick={() => {
              slide("a");
              setPos([styles.timelineCanvas, styles.a]);
            }}
            className={visible === "a" ? active.join(" ") : inactive.join(" ")}
          ></div>
          <div
            onClick={() => {
              slide("b");
              setPos([styles.timelineCanvas, styles.b]);
            }}
            className={visible === "b" ? active.join(" ") : inactive.join(" ")}
          ></div>
          <div
            onClick={() => {
              slide("c");
              setPos([styles.timelineCanvas, styles.c]);
            }}
            className={visible === "c" ? active.join(" ") : inactive.join(" ")}
          ></div>
          <div
            onClick={() => {
              slide("d");
              setPos([styles.timelineCanvas, styles.d]);
            }}
            className={visible === "d" ? active.join(" ") : inactive.join(" ")}
          ></div>
        </div>
      </div>
    </>
  );
}
