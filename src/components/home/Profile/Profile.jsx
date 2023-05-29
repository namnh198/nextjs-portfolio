import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./Profile.module.scss";
import { Widget, Explore } from "@/components/shared";

const cx = classNames.bind(styles);

export default function Profile() {
  return (
    <Widget className={cx("profile-box")} animation="zoom-in">
      <div className={cx("profile-img")}>
        <Image src="/images/me.jpg" alt="Me" width={500} height={500} />
      </div>
      <div className={cx("profile-info")}>
        <h4>A Web Designer</h4>
        <h1>Nam Nguyen</h1>
        <p>I am a Web Designer based in Vietnam</p>
        <Explore className={cx("profile-explore")} href="/about" />
      </div>
    </Widget>
  );
}
