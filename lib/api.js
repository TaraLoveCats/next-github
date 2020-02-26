const axios = require('axios')

const github_base_url = 'https://api.github.com'
const isServer = typeof window === undefined

//客户端和服务器端最终调用的方法
async function requestGithub(method, url, data, headers) {
    return await axios({
        method,
        url: `${github_base_url}${url}`,
        data,
        headers
    })
}

async function request({ method = 'GET', url, data = {}}, req, res) {
    if (!url) {
        throw Error('url must be provided')
    }
    if (isServer) {
        //是服务端环境直接请求github数据
        const session = ctx.session
        const githubAuth = session.githubAuth || {}
        const headers = {}
        const token = githubAuth && githubAuth.access_token
        if (token) {
            headers['Authorization'] = `${githubAuth.token_type} ${token}`
        }
        return await requestGithub(method, url, data, headers)

    } else {
        //客户端环境使用github api代理（ koa处理server/api ）
        return await axios({
            method,
            url: `/github/${url}`,
            data
        })
    }
}

module.exports = {
    request,
    requestGithub
}