import classNames from "classnames/bind";
import { ContactForm, ContactInfo } from "@/components/contacts";
import { Container } from "@/components/shared";
import { MainTemplate } from "@/components/templates";
import styles from "@/styles/Contact.module.scss";

const cx = classNames.bind(styles);
const head = {
  title: "Contact",
  url: "/contact",
};

export default function Contact() {
  return (
    <MainTemplate head={head}>
      <section className={cx("contact-area")}>
        <Container>
          <div className={cx("contact-content")}>
            <ContactInfo />
            <ContactForm />
          </div>
        </Container>
      </section>
    </MainTemplate>
  );
}
