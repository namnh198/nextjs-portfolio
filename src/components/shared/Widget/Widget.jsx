import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import { ImageTheme } from "@/components/shared";
import { ExploreIconDark, ExploreIconLight, BgImage } from "@/assets";
import styles from "./Widget.module.scss";

const cx = classNames.bind(styles);

export default function Widget({
  className,
  animation,
  overlay,
  image,
  title,
  category,
  to,
  href,
  children,
}) {
  return (
    <div
      className={cx("widget", { [className]: className })}
      data-aos={animation}
    >
      <ImageTheme
        className={cx("bg")}
        srcDark={BgImage.src}
        alt="Background"
        width={BgImage.width}
        height={BgImage.height}
      />
      {image && <WidgetImage image={image} alt={title} />}
      {children}
      {href && (
        <Explore overlay={overlay} to={to} href={href}>
          <div className={cx("explore-info")}>
            <p>{category}</p>
            <h1>{title}</h1>
          </div>
        </Explore>
      )}
    </div>
  );
}

const WidgetImage = ({ image, alt }) => {
  return (
    <Image
      className={cx("widget-img")}
      src={image}
      alt={alt}
      width={224}
      height={124}
    />
  );
};

export const Explore = ({ className, overlay = true, href, to, children }) => {
  let ExploreLink = Link;
  if (to) {
    ExploreLink = "a";
  }
  return (
    <>
      {overlay && <ExploreLink href={href} className={cx("overlay-link")} />}
      <div className={cx("explore", { [className]: className })}>
        {children}
        <ExploreLink href={href} className={cx("explore-btn")}>
          <ImageTheme
            srcDark={ExploreIconDark.src}
            srcLight={ExploreIconLight.src}
            alt="Explore"
            width={ExploreIconLight.width}
            height={ExploreIconLight.height}
          />
        </ExploreLink>
      </div>
    </>
  );
};
