import classNames from "classnames/bind";
import { ContactForm, ContactInfo } from "@/components/contacts";
import { Container } from "@/components/shared";
import { MainTemplate } from "@/components/templates";
import Notion from "@/untils/Notion";
import styles from "@/styles/Contact.module.scss";

const cx = classNames.bind(styles);

export default function Contact({ options, head }) {
  return (
    <MainTemplate options={options} head={head}>
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

export const getStaticProps = async () => {
  const options = await Notion.getOptions();
  const head = {
    title: "Contact",
  };
  return {
    props: {
      options,
      head,
    },
    revalidate: 10,
  };
};
