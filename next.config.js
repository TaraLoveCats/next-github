const withCss = require('@zeit/next-css') //使next可以加载css
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
const webpack = require('webpack')

module.exports = withBundleAnalyzer(withCss({
    webpack: (config) => {
        config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
        return config
    }
}))