import classNames from "classnames/bind";
import Link from "next/link";
import { LogoDark, LogoLight } from "@/assets/images";
import styles from "./Logo.module.scss";
import { ImageTheme } from "@/components/shared";

const cx = classNames.bind(styles);

export default function Logo({ top }) {
  return (
    <Link href="/" title="Home" className={cx("logo", { top: !!top })}>
      <ImageTheme srcDark={LogoDark} srcLight={LogoLight} alt="Logo" priority />
    </Link>
  );
}
