import classNames from "classnames/bind";
import { FormProvider, useForm } from "react-hook-form";
import { EmailJs } from "@/untils/Email";
import { useRef, useState } from "react";
import { StarIconDark3, StarIconLight3 } from "@/assets";
import { Alert, Button, ImageTheme, Input } from "@/components/shared";
import { contactForm } from "@/untils/Contact";
import styles from "./ContactForm.module.scss";

const cx = classNames.bind(styles);

export default function ContactForm() {
  const form = useRef();
  const methods = useForm({ mode: "onChange" });
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmitContactForm = (data, e) => {
    e.isDefaultPrevented();
    setDisabledBtn(true);
    EmailJs(form.current).then(
      () => {
        setDisabledBtn(false);
        setSuccess(true);
        setError(false);
      },
      () => {
        setDisabledBtn(false);
        setSuccess(false);
        setError(true);
      }
    );

    // methods.reset();
  };
  return (
    <div data-aos="zoom-in" className={cx("contact-form")}>
      <div className={cx("shadow-box")}>
        <ImageTheme
          srcDark={StarIconDark3.src}
          srcLight={StarIconLight3.src}
          width={StarIconLight3.width}
          height={StarIconLight3.height}
          alt="Star"
        />
        <h1>
          Let’s work <span>together.</span>
        </h1>
        <FormProvider {...methods}>
          <form
            ref={form}
            noValidate
            onSubmit={methods.handleSubmit(handleSubmitContactForm)}
            autoComplete="off"
          >
            {success && (
              <Alert
                type="success"
                message="Your message was sent successfully."
              />
            )}
            {error && (
              <Alert
                type="danger"
                message="An error has occurred. Please try again."
              />
            )}
            {contactForm.map((form, index) => {
              return <Input key={index} {...form} />;
            })}
            <Button type="submit" block disabled={disabledBtn}>
              Send Message
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
