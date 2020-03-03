const colorsJson = require('../colors.json')

module.exports = server => {
    server.use(async (ctx, next) => {
        const { method, path } = ctx;
        if (method === 'GET' && path === '/colors') {
            //输出
            const colors = JSON.parse(JSON.stringify(colorsJson));
            ctx.body = colors;
        } else {
            await next();
        }
    })
}