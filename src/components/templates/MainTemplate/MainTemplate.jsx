import Head from "next/head";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/templates";
import { options } from "@/data/config";
const inter = Inter({ subsets: ["latin"] });

export default function MainTemplate({ head, children }) {
  const { setting, menu } = options;
  const headMeta = HeadMeta(options, head);
  return (
    <>
      <Head>
        <title>{headMeta.title || "NamNH"}</title>
      </Head>
      <main className={inter.className}>
        <Header setting={setting} menu={menu} />
        {children}
        <Footer menu={menu} />
      </main>
    </>
  );
}

export const HeadMeta = (options, head = {}) => {
  const { setting } = options;
  if (!head.title) {
    head.title = setting.site_desc;
  }
  const title = `${setting.site_name} | ${head.title}`;
  const description = head?.description ?? setting.site_desc;

  return {
    title,
    description,
  };
};
