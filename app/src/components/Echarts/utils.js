export function getOptionFromObject(module, type, customProps = {}) {
  return Object.assign(
    {},
    module[type === true ? 'default' : type],
    customProps,
  );
}

export function getOptionFromArray(module, type, customProps = {}) {
  return module[type === true ? 'default' : type].concat(customProps);
}