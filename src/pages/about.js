import classNames from "classnames/bind";
import style from "@/styles/About.module.scss";
import {
  Column,
  Container,
  Row,
  WidgetGallery,
  Widget,
} from "@/components/shared";
import { MainTemplate } from "@/components/templates";
import { Experience, Profile } from "@/components/about";
import { experienceAbout, educationAbout } from "@/untils/About";
import { Contact, Social, Sign } from "@/components/home";

const cx = classNames.bind(style);
const head = {
  title: "About",
};

export default function About() {
  return (
    <MainTemplate head={head}>
      <section>
        <Container>
          <Profile />
          <Row className={cx("mt-24")}>
            <Column md={6} data-aos="zoom-in">
              <Experience title="Experience" experiences={experienceAbout} />
            </Column>
            <Column md={6} data-aos="zoom-in">
              <Experience title="Education" experiences={educationAbout} />
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
