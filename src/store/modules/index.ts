import camelCase from "lodash/camelCase";
const requireModule = require.context(".", false, /\.ts$/); // Get js files inside modules folder
const modules: any = {};
requireModule.keys().forEach((fileName) => {
  // Avoid the index.js file
  if (fileName === "./index.ts") {
    return;
  }
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));
  modules[moduleName] = requireModule(fileName).default;
});

export default modules;
