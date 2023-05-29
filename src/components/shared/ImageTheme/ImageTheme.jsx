import { default as NextImage } from "next/image";

export default function ImageTheme({ srcDark, srcLight, src, ...props }) {
  return (
    <>
      {srcDark && (
        <NextImage src={srcDark} {...props} data-hide-on-theme="light" />
      )}
      {srcLight && (
        <NextImage src={srcLight} {...props} data-hide-on-theme="dark" />
      )}
    </>
  );
}
