import classNames from "classnames/bind";
import styles from "./BreadCrumb.module.scss";
import { Container, Heading } from "@/components/shared";

const cx = classNames.bind(styles);

export default function BreadCrumb({ title, heading }) {
  if (!heading) {
    heading = title;
  }
  return (
    <div className={cx("breadcrumb-area")}>
      <Container>
        <div className={cx("breadcrumb-content")}>
          <p>{`Home - ${title}`}</p>
          <Heading
            className={cx("breadcrumb-heading")}
            animation="fade-up"
            title={heading}
          />
        </div>
      </Container>
    </div>
  );
}
