import classNames from "classnames/bind";
import style from "@/styles/About.module.scss";
import { Column, Container, Row } from "@/components/shared";
import { MainTemplate } from "@/components/templates";
import { Experience, Profile } from "@/components/about";
import { experiences, educations } from "@/data/about";
import { Contact, Social, Sign } from "@/components/home";

const cx = classNames.bind(style);
const head = {
  title: "About",
  url: "/about",
};

export default function About() {
  return (
    <MainTemplate head={head}>
      <section>
        <Container>
          <Profile />
          <Row className={cx("mt-24")}>
            <Column md={6} data-aos="zoom-in">
              <Experience title="Experience" experiences={experiences} />
            </Column>
            <Column md={6} data-aos="zoom-in">
              <Experience title="Education" experiences={educations} />
            </Column>
          </Row>
          <Row className={cx("mt-24", "social-contact-credential-wrapper")}>
            <Column md={3}>
              <Social />
            </Column>
            <Column md={6} className={cx("services")}>
              <Contact />
            </Column>
            <Column md={3}>
              <Sign />
            </Column>
          </Row>
        </Container>
      </section>
    </MainTemplate>
  );
}
