import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import Image from "next/image";
import { ImageTheme, Heading } from "@/components/shared";
import { StarIconDark, StarIconLight } from "@/assets/images";

const cx = classNames.bind(styles);

export default function Profile() {
  return (
    <div className={cx("profile-wrap")} data-aos="zoom-in">
      <div className={cx("profile-image")}>
        <div className={cx("profile-image-inner")}>
          <Image src="/images/me.jpg" alt="Me" width={597} height={597} />
        </div>
      </div>
      <div className={cx("profile-detail")}>
        <Heading
          className={cx("profile-heading")}
          animation="fade-up"
          title="Self Summary"
        />
        <div className={cx("profile-detail-inner")}>
          <ImageTheme
            className={cx("contact-icon")}
            alt="Star"
            srcDark={StarIconDark.src}
            srcLight={StarIconLight.src}
            width={StarIconLight.width}
            height={StarIconLight.height}
          />
          <h1>Nam Nguyen</h1>
          <p>
            I&rsquo;m a software engineer based in Ho Chi Minh City, Vietnam
            with a focus on web design and cloud services. I have a diverse
            range of experience having worked across various fields and
            industries.
          </p>
        </div>
      </div>
    </div>
  );
}
