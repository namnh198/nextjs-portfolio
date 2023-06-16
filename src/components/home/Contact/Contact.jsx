import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { Explore, ImageTheme, Widget } from "@/components/shared";
import { StarIconDark, StarIconLight } from "@/assets/images";

const cx = classNames.bind(styles);

export default function Contact() {
  return (
    <Widget className={cx("contact")} animation="zoom-in">
      <ImageTheme
        className={cx("contact-icon")}
        alt="Star"
        srcDark={StarIconDark.src}
        srcLight={StarIconLight.src}
        width={StarIconLight.width}
        height={StarIconLight.height}
      />
      <h1>
        Let&rsquo;s <br /> work <span>together.</span>{" "}
      </h1>
      <Explore href="/contact" title="Contact" className={cx("explore")} />
    </Widget>
  );
}
