import classNames from "classnames/bind";
import styles from "./WidgetGallery.module.scss";

const cx = classNames.bind(styles);

export default function WidgetGallery({ className, children }) {
  return (
    <div className={cx("gallery", { [className]: className })}>{children}</div>
  );
}
