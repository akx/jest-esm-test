module.exports = (api) => {
  const env = api.cache(() => process.env.NODE_ENV);
  return {
    env: {
      test: {
        plugins: [
          "dynamic-import-node",
          "@babel/plugin-transform-modules-commonjs",
        ],
      },
    },
  };
};
