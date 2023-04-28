/* eslint-disable @typescript-eslint/no-var-requires */
const prettierConfig = require("eslint-config-silash35/prettier.config");

prettierConfig.plugins.push(require("prettier-plugin-tailwindcss"));
prettierConfig.tailwindConfig = "./tailwind.config.js";

module.exports = prettierConfig;
