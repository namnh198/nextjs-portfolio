import classNames from "classnames/bind";
import styles from "./WorkList.module.scss";
import { Work } from "@/components/works";
import { Column, Container, Heading, Row } from "@/components/shared";

const cx = classNames.bind(styles);

export default function WorkList({ works }) {
  return (
    <section>
      <Container>
        <Row className={cx("project-row")}>
          <Heading
            className={cx("section-heading-mobile")}
            animation="fade-up"
            title="All Projects"
          />
          <Column md={4}>
            {works.left.map((project, index) => {
              return (
                <Work
                  className={cx("project-item")}
                  key={index}
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
            {works.right.map((project, index) => {
              return (
                <div className={cx("project-right")} key={index}>
                  {project.map((item, i) => {
                    return (
                      <Work
                        className={cx("project-item")}
                        key={i}
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
