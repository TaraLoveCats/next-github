const axios = require('axios')

const github_base_url = 'https://api.github.com'
const isServer = typeof window === 'undefined'
//客户端和服务器端最终调用的方法
async function requestGithub(method, url, data, headers) {
    try {
        const result = await axios({
            method,
            url: `${github_base_url}${url}`,
            data,
            headers
        })
        if (result.status === 200) {
            return result
        } else {
            console.log('status not ok')
            return { data: false, status: result.status }
        }
    } catch (err) {
        console.log('error caught!')
        // console.error(err)
        return { data: false }
    }
}

//浏览器环境： axios.get('http://localhost:3000/xxx')
//node环境： axios.get('http://localhost:80/xxx')
async function request({ method = 'GET', url, data = {}}, req, res) {
    if (!url) {
        throw Error('url must be provided')
    }
    if (isServer) {
        //是服务端环境直接请求github数据（80端口没有监听程序）
        const session = req.session
        const githubAuth = session.githubAuth || {}
        const headers = {}
        const token = githubAuth && githubAuth.access_token
        if (token) {
            headers['Authorization'] = `${githubAuth.token_type} ${token}`
        }
        return await requestGithub(method, url, data, headers)

    } else {
        //客户端环境用server中的处理程序（ server/api ）
        return await axios({
            method,
            url: `/github${url}`, //`http://localhost:3000/github${url}`
            data
        })
    }
}

module.exports = {
    request,
    requestGithub
}