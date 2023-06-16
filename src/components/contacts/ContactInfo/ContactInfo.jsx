import classNames from "classnames/bind";
import { infomations } from "@/data/contact";
import styles from "./ContactInfo.module.scss";
import { getSocial } from "@/data/socials";

const cx = classNames.bind(styles);
const socials = getSocial("linkedin", "github", "facebook");

export default function ContactInfo({ settings }) {
  return (
    <div className={cx("contact-infos")}>
      <div className={cx("infomations")}>
        <h3 data-aos="fade-up">Contact Info</h3>
        <ul className={cx("contact-details")}>
          {infomations.map((item, index) => {
            let Component = item.icon;
            return (
              <li key={index} data-aos="zoom-in">
                <div className={cx("icon-box")}>
                  <a href={item.url} target="_blank">
                    <Component width={32} height={32} />
                  </a>
                </div>
                <div className={cx("right")}>
                  <span>{item.title}</span>
                  <h4>
                    <a href={item.url} target="_blank">
                      {item.content}
                    </a>
                  </h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={cx("socials")}>
        <h3 data-aos="fade-up">Social Info</h3>
        <ul className={cx("social-links")} data-aos="zoom-in">
          {socials.map((s, index) => {
            let Component = s.icon;
            return (
              <li key={index}>
                <a href={s.url} target="_blank">
                  <Component width={36} height={36} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
