import { MainTemplate } from "@/components/templates";
import { WorkList } from "@/components/works";
import { works } from "@/data/works";

const head = {
  title: "Works",
  url: "/works",
};

export default function Work({ galleries }) {
  return (
    <MainTemplate head={head}>
      <WorkList works={works} />
    </MainTemplate>
  );
}
