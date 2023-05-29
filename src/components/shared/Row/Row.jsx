import classNames from "classnames/bind";

import styles from "./Row.module.scss";

const cx = classNames.bind(styles);

export default function Row({ className, children, ...props }) {
  return (
    <div className={cx("row", { [className]: className })} {...props}>
      {children}
    </div>
  );
}
