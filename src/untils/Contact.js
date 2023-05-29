export const contactInfos = [
  {
    title: "Mail Us",
    content: "namnhn98@gmail.com",
    icon: "fa fa-envelope",
  },
  {
    title: "Contact Us",
    content: "+84 865 636 494",
    icon: "fa fa-phone",
  },
  {
    title: "Location",
    content: "Ho Chi Minh city, Vietnam",
    icon: "fa fa-map-marker",
  },
];

export const contactSocials = [
  {
    icon: "fab fa-linkedin",
    url: "https://linkedin.com/in/namnh198",
  },
  {
    icon: "fab fa-github",
    url: "https://github.com/namnh198",
  },
  {
    icon: "fab fa-facebook",
    url: "https://facebook.com/namnh198",
  },
];

export const contactForm = [
  {
    name: "name",
    type: "text",
    id: "name",
    placeholder: "Name *",
    validation: {
      required: {
        value: true,
        message: "This field is required.",
      },
      maxLength: {
        value: 80,
        message: "This field can't exceed 80 characters",
      },
    },
  },
  {
    name: "email",
    type: "email",
    id: "email",
    placeholder: "Email *",
    validation: {
      required: {
        value: true,
        message: "This field is required.",
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "This field must be a valid email address.",
      },
    },
  },
  {
    name: "subject",
    type: "text",
    id: "subject",
    placeholder: "Subject *",
    validation: {
      required: {
        value: true,
        message: "This field is required.",
      },
      maxLength: {
        value: 80,
        message: "This field can't exceed 80 characters.",
      },
    },
  },
  {
    name: "message",
    type: "text",
    multiple: true,
    id: "message",
    placeholder: "Your messages *",
    validation: {
      required: {
        value: true,
        message: "This field is required.",
      },
      maxLength: {
        value: 500,
        message: "This field can't exceed 500 characters.",
      },
    },
  },
];
