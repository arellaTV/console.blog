module.exports = {
  webpack: (config) => {
    const newConfig = config;
    const graphQLTagLoader = {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    }
    newConfig.module.rules.push(graphQLTagLoader);
    return newConfig;
  }
}
