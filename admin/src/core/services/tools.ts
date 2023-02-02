const Tools = {
  titlify: (title: string) =>
    !title
      ? ''
      : `${(title[0] || '').toUpperCase()}${(title || '')
          .substring(1)
          .toLowerCase()}`,

  parseFieldToLabel: (field: string) =>
    (field || '').split('_').map(Tools.titlify).join(' '),
};

export default Tools;
