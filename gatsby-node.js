const path = require('path');

exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
    },
  });

  const config = getConfig()
  if (stage === 'develop') {
    config.entry.commons.unshift(require.resolve('core-js'))
    actions.replaceWebpackConfig(config)
  }
};