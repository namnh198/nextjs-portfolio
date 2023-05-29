import classNames from "classnames/bind";
import { contactInfos, contactSocials } from "@/untils/Contact";
import styles from "./ContactInfo.module.scss";

const cx = classNames.bind(styles);

export default function ContactInfo({ settings }) {
  return (
    <div className={cx("contact-infos")}>
      <div className={cx("infomations")}>
        <h3 data-aos="fade-up">Contact Info</h3>
        <ul className={cx("contact-details")}>
          {contactInfos.map((item, index) => {
            return (
              <li key={index} data-aos="zoom-in">
                <div className={cx("icon-box")}>
                  <i className={item.icon} />
                </div>
                <div className={cx("right")}>
                  <span>{item.title}</span>
                  <h4>{item.content}</h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={cx("socials")}>
        <h3 data-aos="fade-up">Social Info</h3>
        <ul className={cx("social-links")} data-aos="zoom-in">
          {contactSocials.map((social, index) => {
            return (
              <li key={index}>
                <a href={social.url} target="_blank">
                  <i className={social.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
