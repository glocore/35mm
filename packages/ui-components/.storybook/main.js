const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.[tj]sx"],
  addons: [
    {
      name: "@storybook/preset-typescript",
      options: {
        test: /\.(js|ts|tsx)$/,
        include: [path.resolve(__dirname, "../src")],
      },
    },
  ],
};
