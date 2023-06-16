import Head from "next/head";
import { Inter } from "next/font/google";
import { NextSeo } from "next-seo";
import { Header, Footer } from "@/components/templates";
import { options } from "@/data/config";
const inter = Inter({ subsets: ["latin"] });

export default function MainTemplate({ head, children }) {
  const { setting, menu } = options;
  const headMeta = HeadMeta(options, head);
  return (
    <>
      <NextSeo
        title={headMeta.title}
        description={headMeta.description}
        canonical={headMeta.url}
        openGraph={{
          title: setting.site_name,
          description: setting.site_desc,
        }}
      />
      <Head>
        <title>{headMeta.title || "NamNH"}</title>
        <meta name="author" content={headMeta.author} />
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
  const url = head?.url ?? setting.site_url;

  return {
    title,
    description,
    url,
  };
};
