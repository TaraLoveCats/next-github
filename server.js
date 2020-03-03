const Koa = require('koa')
const Router = require('koa-router')
const session = require('koa-session')
const next = require('next')
const Redis = require('ioredis')
const auth = require('./server/auth')
const RedisSessionStore = require('./server/session-store')
const api = require('./server/api')
const koaBody = require('koa-body')
const atob = require('atob')
const json = require('./server/json')

//设置node全局增加一个atob方法
global.atob = atob;
const redis = new Redis({
    port: 6379
});
const dev = process.env.NODE_ENV !== 'production';//开发环境
const app = next({ dev })
const handle = app.getRequestHandler()//处理http请求

//完成pages下的编译再响应请求
app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    server.use(koaBody())
    server.keys = ['Tara develop Github App'];//给cookie加密
    const SESSION_CONFIG = {
        key: 'sid',
        store: new RedisSessionStore(redis),
    };
    server.use(session(SESSION_CONFIG, server))

    //读取json文件
    json(server)
    // 配置处理github OAuth的登录
    auth(server)
    //api代理请求github数据
    api(server)

    server.use(router.routes())
    server.use(async (ctx) => {
        ctx.req.session = ctx.session
        await handle(ctx.req, ctx.res)

        ctx.respond = false 
    })
    server.listen(3000, _ => {
        console.log('koa server running at port 3000')
    })
})