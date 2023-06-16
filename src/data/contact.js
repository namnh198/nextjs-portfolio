import { Mail, Phone, PinAlt } from "iconoir-react";
export const infomations = [
  {
    title: "Mail Us",
    content: "namnhn98@gmail.com",
    icon: Mail,
    url: "mailto:namnhn98@gmail.com",
  },
  {
    title: "Contact Us",
    content: "+84 865 636 494",
    icon: Phone,
    url: "tel:0865636494",
  },
  {
    title: "Location",
    content: "Ho Chi Minh city, Vietnam",
    icon: PinAlt,
    url: "https://www.google.com/maps/place/8+%C4%90.+S%E1%BB%91+1,+Hi%E1%BB%87p+B%C3%ACnh+Ph%C6%B0%E1%BB%9Bc,+Th%E1%BB%A7+%C4%90%E1%BB%A9c,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8468602,106.7208792,17z/data=!3m1!4b1!4m6!3m5!1s0x317528761d8e9501:0x6010cb06f4c55750!8m2!3d10.8468602!4d106.7234541!16s%2Fg%2F11qq9jj52x?entry=ttu",
  },
];

export const form = [
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
