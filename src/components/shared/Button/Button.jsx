import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

export default function Button({
  className,
  to,
  href,
  primary = true,
  block,
  disabled,
  outline,
  children,
  onClick,
  ...props
}) {
  let Component = 'button';
  const pageProps = {
    onClick,
    ...props,
  };
  if (to) {
    Component = Link;
    pageProps.href = to;
  } else if (href) {
    Component = 'a';
    pageProps.href = href;
  }

  const classes = cx('btn', {
    [className]: className,
    primary,
    block,
    outline,
    disabled,
  });
  return (
    <Component className={classes} {...pageProps}>
      {children}
    </Component>
  );
}
