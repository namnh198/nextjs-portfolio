import classNames from "classnames/bind";
import { Facebook, LinkedIn, GitHub, YouTube, Instagram } from "iconoir-react";
import styles from "./Banner.module.scss";
import { Widget } from "@/components/shared";
import { getSocial } from "@/data/socials";

const cx = classNames.bind(styles);
const socials = getSocial(
  "facebook",
  "github",
  "instagram",
  "linkedin",
  "youtube"
);

export default function Banner() {
  return (
    <Widget animation="zoom-in" className={cx("banner")}>
      <ul>
        {socials.map((s, index) => {
          const Component = s.icon;
          return (
            <li key={index}>
              <a href={s.url} title={s.title} target="_blank">
                <Component width={32} height={32} />
              </a>
            </li>
          );
        })}
      </ul>
    </Widget>
  );
}
