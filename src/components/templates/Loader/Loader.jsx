import classNames from "classnames/bind";
import styles from "./Loader.module.scss";
import Head from "next/head";

const cx = classNames.bind(styles);

export default function Loader() {
  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <div className={cx("preloader")}>
        <div className={cx("black-wall")}></div>
        <div className={cx("loader")}></div>
      </div>
    </>
  );
}
