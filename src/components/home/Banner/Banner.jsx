import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import { Widget } from "@/components/shared";

const cx = classNames.bind(styles);
export default function Banner() {
  return (
    <Widget animation="zoom-in" className={cx("banner")}>
      <ul>
        <li>
          <a href="https://facebook.com/namnh198" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/namnh198" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/namnh198" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://youtube.com/@namnh198" target="_blank">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/namnh198">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </Widget>
  );
}
