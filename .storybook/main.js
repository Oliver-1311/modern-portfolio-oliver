/** @type { import('@storybook/nextjs').StorybookConfig } */
const path = require('path');
const config = {
  stories: [
    "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)",
 
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "../");
    return config;
  }
};
export default config;
