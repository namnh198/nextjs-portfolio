import moment from "moment";

export default function DateTime({ className, time }) {
  moment.locale("en");
  const days = 5;
  const raw = moment(time);
  const duration = moment.duration(moment().diff(time));
  const datetime =
    duration.asHours() > 24 * days
      ? raw.format("DD/MM/YYYY HH:mm")
      : raw.fromNow();
  return <div className={className}>{datetime}</div>;
}
