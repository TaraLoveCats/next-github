const withCss = require('@zeit/next-css') //使next可以加载css
const config = require('./config')

module.exports = withCss({
  publicRuntimeConfig: {
    GITHUB_OAUTH_URL: config.GITHUB_OAUTH_URL,
    OAUTH_URL: config.OAUTH_URL,
  },
})