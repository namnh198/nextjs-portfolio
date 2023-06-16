import classNames from "classnames/bind";
import styles from "./Heading.module.scss";
import { StarIconDark2, StarIconLight2 } from "@/assets/images";
import { ImageTheme } from "@/components/shared";

const cx = classNames.bind(styles);

export default function Heading({ className, animation, title }) {
  return (
    <h1
      className={cx("section-heading", { [className]: className })}
      data-aos={animation}
    >
      <ImageTheme
        srcDark={StarIconDark2}
        srcLight={StarIconLight2}
        alt="Star"
      />
      <span>{title}</span>
      <ImageTheme
        srcDark={StarIconDark2}
        srcLight={StarIconLight2}
        alt="Star"
      />
    </h1>
  );
}
