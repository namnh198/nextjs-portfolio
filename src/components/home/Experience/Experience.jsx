import classNames from "classnames/bind";
import styles from "./Experience.module.scss";
import { Widget } from "@/components/shared";

const cx = classNames.bind(styles);

export default function Experience() {
  return (
    <Widget className={cx("experience")} animation="zoom-in">
      <div className={cx("experience-item")}>
        <h1>07</h1>
        <p>
          Years
          <br />
          Experience
        </p>
      </div>
      <div className={cx("experience-item")}>
        <h1>07</h1>
        <p>
          Years
          <br />
          Experience
        </p>
      </div>
      <div className={cx("experience-item")}>
        <h1>07</h1>
        <p>
          Years
          <br />
          Experience
        </p>
      </div>
    </Widget>
  );
}
