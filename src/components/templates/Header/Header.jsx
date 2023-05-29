import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Header.module.scss";
import {
  Button,
  Container,
  Logo,
  Menu,
  ThemeSwitcher,
} from "@/components/shared";

const cx = classNames.bind(styles);

export default function Header({ setting, menu }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className={styles["header-area"]}>
      <Container>
        <div className={cx("header-wrapper")}>
          <Logo top />
          <nav className={cx("navbar", { active: toggleMenu })}>
            <Menu menuClass="menu" menu={menu} />
            <Button
              href="https://drive.google.com/file/d/15qWmvhXed708FnEaXxhmHrHTVS0lJT38/view?usp=drive_link"
              title="Resume"
              target="_blank"
              className={cx("resume")}
            >
              Resume
            </Button>
          </nav>
          <div className={cx("right-menu")}>
            {setting.site_theme === "true" && <ThemeSwitcher />}
            <Button
              href="https://drive.google.com/file/d/15qWmvhXed708FnEaXxhmHrHTVS0lJT38/view?usp=drive_link"
              title="Resume"
              target="_blank"
              className={cx("resume")}
            >
              Resume
            </Button>
          </div>

          <div
            className={cx("show-menu", { active: toggleMenu })}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Container>
    </header>
  );
}
