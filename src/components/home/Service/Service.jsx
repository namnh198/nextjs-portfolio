import classNames from "classnames/bind";
import styles from "./Service.module.scss";
import { Widget } from "@/components/shared";

const cx = classNames.bind(styles);

export default function Service() {
  return (
    <Widget
      animation="zoom-in"
      className={cx("services-list")}
      title="Services Offering"
      category="Specialization"
      href="/services"
    >
      <div className={cx("services-icon")}>
        <i className="fa-brands fa-figma"></i>
        <i className="fa-brands fa-magento"></i>
        <i className="fa-brands fa-docker"></i>
        <i className="fa-brands fa-js"></i>
      </div>
    </Widget>
  );
}
