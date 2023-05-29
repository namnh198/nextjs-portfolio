import classNames from "classnames/bind";
// import styles from "@/styles/WorkDetail.module.scss";
import { Container } from "@/components/shared";
import { MainTemplate } from "@/components/templates";
import Notion from "@/untils/Notion";

// const cx = classNames.bind(styles);

export default function Note({ options }) {
  return (
    <div>Work Details</div>
    // <MainTemplate options={options}>
    //   <section>
    //     <Container></Container>
    //   </section>
    // </MainTemplate>
  );
}

// export const getStaticPaths = async () => {
//   return {
//     props: {
//       options: await Notion.getOptions(),
//     },
//   };
// };
