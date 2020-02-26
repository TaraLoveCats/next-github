const axios = require('axios')

const config = require('../config')
const { client_id, client_secret, request_token_url } = config.github

module.exports = server => {
    server.use(async (ctx, next) => {
        if (ctx.path === '/auth') {
            const code = ctx.query.code
            if (!code) {
                ctx.body = 'code not exist'
                return
            }
            //请求token
            const result = await axios({
                method: 'POST',
                url: request_token_url,
                data: {
                    client_id,
                    client_secret,
                    code
                },
                headers: {
                    Accept: 'application/json'
                }

            })
            console.log(result.status, result.data)

            if (result.status === 200 && (result.data && !result.data.error)) {
                ctx.session.githubAuth = result.data

                const { access_token, token_type } = result.data
                //用token请求数据
                const userInfoResp = await axios({
                    method: 'GET',
                    url: 'https://api.github.com/user',
                    headers: {
                        Authorization: `${token_type} ${access_token}`
                    }
                })

                ctx.session.userInfo = userInfoResp.data
                ctx.redirect((ctx.session && ctx.session.urlBeforeOAuth) || '/')
                ctx.session.urlBeforeOAuth = ''
            } else {
                const errMsg = result.data && result.data.error
                ctx.body = `request token failed ${errMsg}`
            }
        } else {
            await next()
        }
    })

    server.use(async (ctx, next) => {
        const { path, method } = ctx
        if (path === '/logout' && method === 'POST') {
            //清空用户会话信息
            ctx.session = null
            ctx.body = 'logout success'
        } else {
            await next()
        }
    })

    server.use( async (ctx, next) => {
        const { path, method } = ctx
        if (path === '/prepare-auth' && method === 'GET') {
            const { url } = ctx.query
            ctx.session.urlBeforeOAuth = url //保留登录时的url
            // ctx.body = 'ready'
            ctx.redirect(config.OAUTH_URL) //去登录验证
        } else {
            await next()
        }
    })
}