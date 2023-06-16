import classNames from "classnames/bind";
import styles from "./Work.module.scss";
import { Widget } from "@/components/shared";
import Image from "next/image";

const cx = classNames.bind(styles);

export default function Work({ className, project, animation }) {
  return (
    <div data-aos={animation}>
      <Widget
        className={cx("project-item", { [className]: className })}
        title={project.title}
        category={project.service}
        to={true}
        target="_blank"
        href={project.url}
      >
        <div className={cx("project-img")}>
          <Image
            src={project.image}
            alt={project.title}
            width={339}
            height={287}
          />
        </div>
      </Widget>
    </div>
  );
}
