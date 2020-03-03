const { requestGithub } = require('../lib/api')

module.exports = (server) => {
    server.use(async (ctx, next) => {
        const { path } = ctx
        if (path.startsWith('/github/')) {
            const { session, method } = ctx
            const githubAuth = session && session.githubAuth
            const token = githubAuth && githubAuth.access_token
            let headers = {}
            if (token) {
                headers['Authorization'] = `${githubAuth.token_type} ${token}`
            }

            const result = await requestGithub(
                method, 
                ctx.url.replace('/github/', '/'), 
                ctx.request.body || {},
                headers
            )
            ctx.status = result.status
            ctx.body = result.data
        } else {
            await next()
        }
    })
}