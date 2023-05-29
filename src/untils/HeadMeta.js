export const HeadMeta = (options, head = {}) => {
  const { settings } = options;
  if (!head.title) {
    head.title = settings.site_desc;
  }
  const title = `${settings.site_name} | ${head.title}`;
  const description = head?.description ?? settings.site_desc;

  return {
    title,
    description,
  };
};
