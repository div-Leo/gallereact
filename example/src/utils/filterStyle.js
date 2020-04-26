function filterStyle(styles) {
  return Object.keys(styles).reduce((acc, key) => {
    if (Object.keys(styles[key]).length) acc[key] = styles[key];
    return acc;
  }, {});
}

export default filterStyle;
