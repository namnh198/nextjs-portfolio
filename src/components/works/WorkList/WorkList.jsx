import classNames from "classnames/bind";
import styles from "./WorkList.module.scss";
import { Work } from "@/components/works";
import { Column, Container, Heading, Row } from "@/components/shared";

const cx = classNames.bind(styles);

export default function WorkList({ galleries }) {
  return (
    <section>
      <Container>
        <Row className={cx("project-row")}>
          <Column md={4}>
            {galleries.galleryLeft.map((project) => {
              return (
                <Work
                  className={cx("project-item")}
                  key={project.id}
                  project={project}
                  animation="zoom-in"
                />
              );
            })}
          </Column>
          <Column md={8}>
            <Heading
              className={cx("section-heading")}
              animation="fade-up"
              title="All Projects"
            />
            {galleries.galleryRight.map((project, index) => {
              return (
                <div className={cx("project-right")} key={index}>
                  {project.map((item) => {
                    return (
                      <Work
                        className={cx("project-item")}
                        key={item.id}
                        project={item}
                        animation="zoom-in"
                      />
                    );
                  })}
                </div>
              );
            })}
          </Column>
        </Row>
      </Container>
    </section>
  );
}
