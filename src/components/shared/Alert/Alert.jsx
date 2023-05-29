import classNames from 'classnames/bind';
import styles from './Alert.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

export default function Alert({ type, message }) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHidden(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);
  return <div className={cx('alert', { [`alert-${type}`]: type, hidden: hidden })}>{message}</div>;
}
