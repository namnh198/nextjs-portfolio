export const HeadMeta = (options, head = {}) => {
  const { setting } = options;
  if (!head.title) {
    head.title = setting.site_desc;
  }
  const title = `${setting.site_name} | ${head.title}`;
  const description = head?.description ?? setting.site_desc;

  return {
    title,
    description,
  };
};
