import classNames from "classnames/bind";
import styles from "./Experience.module.scss";

const cx = classNames.bind(styles);

export default function Experience({ title, experiences }) {
  return (
    <div className={cx("exp-wrap")}>
      <h3>{title}</h3>
      <ul>
        {experiences.map((experience, index) => {
          return (
            <li key={index}>
              <p className={cx("date")}>{experience.date}</p>
              <h2>{experience.title}</h2>
              <p className={cx("type")}>{experience.type}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
