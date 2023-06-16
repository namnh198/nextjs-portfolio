import classNames from "classnames/bind";
import styles from "./ThemeSwitcher.module.scss";
import { useTheme } from "next-themes";
import { HalfMoon, SunLight } from "iconoir-react";

const cx = classNames.bind(styles);

export default function ThemeSwitcher() {
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <button
      className={cx("switch-theme")}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <IconDarkMode /> : <IconLightMode />}
    </button>
  );
}

const IconDarkMode = () => {
  return <SunLight width={24} height={24} />;
};

const IconLightMode = () => {
  return <HalfMoon width={24} height={24} />;
};
