export default function Index({ data }) {
    return <span>Index</span>
}

const api = require('../lib/api')
console.log(typeof window === undefined)

//调用： 服务端渲染index时 /客户端导航到index时
Index.getInititalProps = async ({ ctx, reduxStore }) => {
    //浏览器环境： axios.get('http://localhost:3000')
    //node环境： axios.get('http://localhost:80')
    const result = await api.request(
        {
            url: '/search/repositories?q=react+in:name'
        }, 
        ctx.req, 
        ctx.res
    )
    console.log(result)
    return {
        data: result.data
    }
}

