import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import { useFormContext } from 'react-hook-form';

const cx = classNames.bind(styles);

export default function Input({ className, type, multiple, name, validation, ...props }) {
  let Component = 'input';

  if (multiple) {
    Component = 'textarea';
  }
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const messageErr = findInputError(errors, name);
  const isInvalid = isFormInValid(messageErr);

  const classes = cx('input', { [className]: className, 'is-invalid': isInvalid, 'is-valid': !isInvalid });
  return (
    <div className={cx('input-group')}>
      <Component type={type} className={classes} {...props} {...register(name, validation)} />
      {isInvalid && <InvalidFeedback message={messageErr.error.message} />}
    </div>
  );
}

const InvalidFeedback = ({ message }) => {
  return <div className={cx('invalid-feedback')}>{message}</div>;
};

const findInputError = (errors, name) => {
  return Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, {});
};

const isFormInValid = (err) => {
  if (Object.keys(err).length > 0) return true;
  return false;
};

const isEmptyObject = (obj) => {
  return typeof obj === 'object' && !Object.keys(obj).length === 0;
};
