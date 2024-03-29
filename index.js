// const eslintrc = require("./.eslintrc.js");

// module.exports = eslintrc;

module.exports = {
  extends: [
    "./configs/base",
    "eslint-config-airbnb-base",
    "./rules/es",
    "./rules/import",
  ].map(require.resolve),
  parser: "babel-eslint",
};
