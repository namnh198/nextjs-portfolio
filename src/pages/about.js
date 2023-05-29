import classNames from "classnames/bind";
import styles from "@/styles/About.module.scss";
import { Container } from "@/components/shared";
import { MainTemplate } from "@/components/templates";
import Notion from "@/untils/Notion";

const cx = classNames.bind(styles);

export default function About({ options, head }) {
  return (
    <MainTemplate options={options} head={head}>
      <section className={cx("about-area")}>
        <Container></Container>
      </section>
    </MainTemplate>
  );
}

export const getStaticProps = async () => {
  const options = await Notion.getOptions();
  const head = {
    title: "About",
  };
  return {
    props: {
      options,
      head,
    },
    revalidate: 10,
  };
};
