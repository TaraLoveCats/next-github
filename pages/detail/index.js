import withRepoBasic from '../../components/with-repo-basic'
import api from '../../lib/api'
import 'github-markdown-css'
import Markdown from '../../components/Markdown'
import LRU from 'lru-cache'

const cache = new LRU({
    maxAge: 1000 * 60 * 60
})
function Detail({ readme }) {
    //readme.content 是 base64 encoded
    return <Markdown content={readme.content} isBase64={true} />
}

Detail.getInitialProps = async ({ query, req, res }) => {
    const { owner, name } = query;
    const fullName = `${owner}/${name}`;
    if (cache.get(fullName)) {
        return {
            readme: cache.get(fullName)
        }
    }

    const readmeResp = await api.request({
        url: `/repos/${owner}/${name}/readme`
    }, req, res);
    cache.set(fullName, readmeResp.data);

    return {
        readme: readmeResp.data,
    }
}

export default withRepoBasic(Detail, 'index')