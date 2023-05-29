import classNames from "classnames/bind";
import styles from "./Column.module.scss";

const cx = classNames.bind(styles);

export default function Column({
  children,
  className,
  cols,
  sm,
  md,
  lg,
  xl,
  ...pageProp
}) {
  const classes = cx({
    [className]: className,
    ["col"]: cols,
    [`col-${cols}`]: cols,
    [`col-sm-${sm}`]: sm,
    [`col-md-${md}`]: md,
    [`col-lg-${lg}`]: lg,
    [`col-xl-${xl}`]: xl,
  });

  return (
    <div className={classes} {...pageProp}>
      {children}
    </div>
  );
}
