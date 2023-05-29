import classNames from "classnames/bind";
import styles from "./Social.module.scss";
import { Widget } from "@/components/shared";

const cx = classNames.bind(styles);

export default function Social() {
  return (
    <Widget
      animation="zoom-in"
      className={cx("socials-list")}
      title="Profiles"
      category="Stay with me"
      href="/contact"
      overlay={false}
    >
      <div className={cx("socials-icon")}>
        <a href="https://linkedin.com/in/namnh198" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/namnh198" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </Widget>
  );
}
