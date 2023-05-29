import { MainTemplate } from "@/components/templates";
import { WorkList } from "@/components/works";
import Notion from "@/untils/Notion";

export default function Work({ options, head, galleries }) {
  return (
    <MainTemplate options={options} head={head}>
      <WorkList galleries={galleries} />
    </MainTemplate>
  );
}

export const getStaticProps = async () => {
  const options = await Notion.getOptions();
  const galleries = await Notion.getProjectsToGallery();
  const head = {
    title: "Works",
  };
  return {
    props: {
      options,
      galleries,
      head,
    },
    revalidate: 10,
  };
};
