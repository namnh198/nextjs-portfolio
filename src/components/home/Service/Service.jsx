import classNames from "classnames/bind";
import { Figma, Code, CloudSync, DatabaseSettings } from "iconoir-react";
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
        <Figma width={44} height={44} color="#5b78f6" />
        <Code width={44} height={44} color="#5b78f6" />
        <DatabaseSettings width={44} height={44} color="#5b78f6" />
        <CloudSync width={44} height={44} color="#5b78f6" />
      </div>
    </Widget>
  );
}
