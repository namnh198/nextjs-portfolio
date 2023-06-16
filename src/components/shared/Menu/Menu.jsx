import classNames from "classnames/bind";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

export default function Menu({ menuClass, menu }) {
  const router = useRouter();

  return (
    <ul className={cx(menuClass)}>
      {menu.map((item, index) => {
        let Component = Link;
        let props = {};
        if (isToHref(item.url)) {
          Component = "a";
          props = { target: "_blank", rel: "noreferrer" };
        }

        return (
          <li
            key={index}
            className={cx({ active: router.pathname === item.url })}
          >
            <Component href={item.url} title={item.title} {...props}>
              {item.title}
            </Component>
          </li>
        );
      })}
    </ul>
  );
}

const isToHref = (url) => {
  const regex =
    /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g;
  return regex.test(url);
};
