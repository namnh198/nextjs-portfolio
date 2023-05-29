import classNames from 'classnames/bind';

import styles from './Container.module.scss';

const cx = classNames.bind(styles);

export default function Container({ className, children, ...props }) {
  return (
    <div className={cx('container', { className })} {...props}>
      {children}
    </div>
  );
}
