import { MainTemplate } from "@/components/templates";
import { WorkList } from "@/components/works";
import { works } from "@/data/works";

const head = {
  title: "Works",
};

export default function Work({ galleries }) {
  return (
    <MainTemplate head={head}>
      <WorkList works={works} />
    </MainTemplate>
  );
}
