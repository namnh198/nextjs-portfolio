import classNames from "classnames/bind";
import styles from "@/styles/Home.module.scss";
import { MainTemplate } from "@/components/templates";
import Notion from "@/untils/Notion";
import {
  Column,
  Container,
  Row,
  Widget,
  WidgetGallery,
} from "@/components/shared";
import {
  Contact,
  Experience,
  Profile,
  Service,
  Social,
} from "@/components/home";

const cx = classNames.bind(styles);

export default function Home({ options }) {
  return (
    <MainTemplate options={options}>
      <div>
        <Container>
          <Row>
            <Column md={6} className={cx("profile-wrapper")}>
              <Profile />
            </Column>
            <Column md={6} className={cx("profile-wrapper")}>
              <WidgetGallery className={cx("credentials-works")}>
                <Widget
                  animation="zoom-in"
                  image="/images/sign.png"
                  href="/credentials"
                  title="Credentials"
                  category="More about me"
                />
                <Widget
                  animation="zoom-in"
                  image="/images/my-works.png"
                  href="/works"
                  title="Projects"
                  category="Showcase"
                />
              </WidgetGallery>
            </Column>
          </Row>
          <Row className={cx("mt-24")}>
            <Column md={12}>
              <WidgetGallery className={cx("notes-services")}>
                <Widget
                  animation="zoom-in"
                  target="_blank"
                  className={cx("blog-box")}
                  image="/images/blog.png"
                  href="https://tieugum.com/"
                  title="My Notes"
                  category="Blog"
                />
                <Service />
                <Social />
              </WidgetGallery>
            </Column>
          </Row>
          <Row className={cx("mt-24")}>
            <Column md={6} className={cx("client-contact-wrapper")}>
              <Experience />
            </Column>
            <Column md={6} className={cx("client-contact-wrapper")}>
              <Contact />
            </Column>
          </Row>
        </Container>
      </div>
    </MainTemplate>
  );
}

export const getStaticProps = async () => {
  const options = await Notion.getOptions();
  return {
    props: {
      options,
    },
    revalidate: 10,
  };
};
