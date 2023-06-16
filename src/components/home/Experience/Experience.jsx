import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./Experience.module.scss";
import { Widget } from "@/components/shared";
import { projects } from "@/data/works";

const cx = classNames.bind(styles);

export default function Experience() {
  const [experience, setExperience] = useState(0);
  const [clientWorld, setClientWork] = useState(0);
  const [project, setProject] = useState(0);

  useEffect(() => {
    const currentYear = new Date();
    setExperience(currentYear.getFullYear() - 2020);
    setProject(projects.length);
  }, []);

  useEffect(() => {
    let clients = [];
    clients = projects.reduce((r, object) => {
      let client = object.client;
      r[client] ? ++r[client] : (r[client] = 1);
      return r;
    }, {});

    setClientWork(Object.keys(clients).length);
  }, []);

  return (
    <Widget className={cx("experience")} animation="zoom-in">
      <div className={cx("experience-item")}>
        <h1>{experience}</h1>
        <p>
          Years
          <br />
          Experience
        </p>
      </div>
      <div className={cx("experience-item")}>
        <h1>+{clientWorld}</h1>
        <p>
          Clients
          <br />
          WorldWide
        </p>
      </div>
      <div className={cx("experience-item")}>
        <h1>+{project}</h1>
        <p>
          Total
          <br />
          Projects
        </p>
      </div>
    </Widget>
  );
}
