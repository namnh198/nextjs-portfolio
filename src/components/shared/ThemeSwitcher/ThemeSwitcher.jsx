import classNames from 'classnames/bind';
import styles from './ThemeSwitcher.module.scss';
import { useTheme } from 'next-themes';

const cx = classNames.bind(styles);

export default function HeThemeSwitcherading({ className, animation, title }) {
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <button className={cx('switch-theme')} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {resolvedTheme === 'dark' ? <IconDarkMode /> : <IconLightMode />}
    </button>
  );
}

const IconDarkMode = () => {
  return <i className="fa-regular fa-lightbulb" />;
};

const IconLightMode = () => {
  return <i className="fa-regular fa-moon" />;
};
