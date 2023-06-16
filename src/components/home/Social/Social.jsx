import classNames from "classnames/bind";
import { LinkedIn, GitHub } from "iconoir-react";
import styles from "./Social.module.scss";
import { Widget } from "@/components/shared";
import { getSocial } from "@/data/socials";

const cx = classNames.bind(styles);
const socials = getSocial("linkedin", "github");

export default function Social() {
  return (
    <Widget
      animation="zoom-in"
      title="Profiles"
      category="Stay with me"
      href="/contact"
      overlay={false}
    >
      <div className={cx("socials-icon")}>
        {socials.map((s, index) => {
          let Component = s.icon;
          return (
            <a href={s.url} target="_blank" key={index}>
              <Component width={36} height={36} />
            </a>
          );
        })}
      </div>
    </Widget>
  );
}
