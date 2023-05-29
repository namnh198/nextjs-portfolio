import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Logo, Menu } from '@/components/shared';

const cx = classNames.bind(styles);

export default function Footer({ menu }) {
  return (
    <footer className={cx('footer-area')}>
      <div className="container">
        <div className={cx('footer-content')}>
          <Logo className={cx('logo')} />
          <Menu menuClass="footer-menu" menu={menu} />

          <p className={cx('copyright')}>
            &copy; All rights reserved by <span>Nam Nguyen</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
