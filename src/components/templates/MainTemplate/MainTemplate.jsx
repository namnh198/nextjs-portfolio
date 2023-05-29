import Head from "next/head";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/templates";
import { HeadMeta } from "@/untils/HeadMeta";

const inter = Inter({ subsets: ["latin"] });

export default function MainTemplate({ options, head, children }) {
  const { settings, menu } = options;
  const headMeta = HeadMeta(options, head);
  return (
    <>
      <Head>
        <title>{headMeta.title || "NamNH"}</title>
      </Head>
      <main className={inter.className}>
        <Header setting={settings} menu={menu} />
        {children}
        <Footer menu={menu} />
      </main>
    </>
  );
}
