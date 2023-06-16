import classNames from "classnames/bind";
import styles from "@/styles/Home.module.scss";
import { MainTemplate } from "@/components/templates";
import { Column, Container, Row } from "@/components/shared";
import {
  Banner,
  Contact,
  Experience,
  Note,
  Profile,
  Service,
  Sign,
  Social,
  Work,
} from "@/components/home";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <MainTemplate>
      <Container>
        <Row>
          <Column md={6} className={cx("profile-wrapper")}>
            <Profile />
          </Column>
          <Column md={6} className={cx("profile-wrapper")}>
            <Row className={cx("banner-wrapper")}>
              <Column sm={12}>
                <Banner />
              </Column>
            </Row>
            <Row className={cx("credential-work-wrapper")}>
              <Column sm={6}>
                <Sign />
              </Column>
              <Column sm={6}>
                <Work />
              </Column>
            </Row>
          </Column>
        </Row>
        <Row className={cx("mt-24", "note-services-social-wrapper")}>
          <Column md={3}>
            <Note />
          </Column>
          <Column md={6} className={cx("services")}>
            <Service />
          </Column>
          <Column md={3}>
            <Social />
          </Column>
        </Row>
        <Row className={cx("mt-24", "client-contact-wrapper")}>
          <Column md={6}>
            <Experience />
          </Column>
          <Column md={6}>
            <Contact />
          </Column>
        </Row>
      </Container>
    </MainTemplate>
  );
}
