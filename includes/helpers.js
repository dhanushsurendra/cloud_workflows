function toSnakeCase(field) {
  return field
    .replace(/\./g, '_')              // replace dots with _
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2') // add _ before capitals
    .toLowerCase();
}

module.exports = {toSnakeCase};