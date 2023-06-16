import classNames from "classnames/bind";
import Link from "next/link";
import { useTheme } from "next-themes";
import { LogoDark, LogoLight } from "@/assets/images";
import styles from "./Logo.module.scss";
import { ImageTheme } from "@/components/shared";

const cx = classNames.bind(styles);

export default function Logo({ top }) {
  const { resolvedTheme } = useTheme();
  return (
    <Link href="/" title="Home" className={cx("logo", { top: !!top })}>
      <ImageTheme
        srcDark={LogoDark.src}
        srcLight={LogoLight.src}
        alt="Logo"
        width={LogoLight.width}
        height={LogoLight.height}
      />
    </Link>
  );
}
