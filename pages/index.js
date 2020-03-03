import { useSelector } from 'react-redux'
import { Button, Tabs, Result, Icon } from 'antd'
import { useEffect } from 'react'
import Repo from '../components/Repo'
import config from '../config'
import LRU from 'lru-cache'
import  Router, { useRouter } from 'next/router'
import { cacheArray } from '../lib/repo-basic-cache'

const { TabPane } = Tabs;
const cache = new LRU({
    maxAge: 1000 * 60 * 30 //30min
})
const isServer = typeof window === 'undefined';

export default function Index({ userRepos = [], userStarredRepos = [], colors }) {
    const user = useSelector(state => state.user);
    const router = useRouter();
    const activeTabKey = router.query.key || 'repos';

    const handleTabChange = (activeTabKey) => {
        Router.push(`/?key=${activeTabKey}`)
    }
    
    //在Index页面不频繁请求repo信息
    useEffect(() => {
        if (!isServer) { 
            userRepos && cache.set('userRepos', userRepos)
            userStarredRepos &&  cache.set('userStarredRepos', userStarredRepos)
        }
    }, [userRepos, userStarredRepos])

    //跳转到/search页面不用重新请求repo信息
    useEffect(() => {
        if (!isServer) {
            cacheArray(userRepos)
            cacheArray(userStarredRepos)
        }
    })

	const BeforeLogin = () => (
		<>
            <Result
                status={null}
                icon={<Icon type="github" />}
                title="Click the button to login into your Github account"
                extra={<Button type="primary" href={config.OAUTH_URL}>Log in</Button>}
            />
		</>
	)
	
	if (!user || !user.id) {
		return <BeforeLogin />
	}

	return (
		<>
			<div className="root">
				<div className="user-info">
					<img src={user.avatar_url} alt="user avatar" className="user-avatar"/>
					<p className="user-name">{user.login}</p>
				</div>
                <Tabs 
                    activeKey={activeTabKey} 
                    onChange={handleTabChange} 
                    animated={false}
                    size="large"
                >
                    <TabPane key="repos" tab="Repositories">
                        {userRepos.map(repo => <Repo key={repo.id} repo={repo} colors={colors} />)}
                    </TabPane>
                    <TabPane key="stars" tab="Stars">
                        {userStarredRepos.map(repo => <Repo key={repo.id} repo={repo} colors={colors} />)}
                    </TabPane>
                </Tabs>
			</div>
			<style jsx>{`
				.root {
					display: flex;
					align-items: flex-start;
					padding: 20px 0;
				}
				.user-info {
					width: 200px;
					margin-right: 40px;
				}
				.user-name {
					font-size: 20px;
					font-weight: 300;
					margin-top: 10px;
				}
				.user-avatar {
					width: 100%;
					border-radius: 4px;
				}
			`}</style>
		</>
	)
}

const api = require('../lib/api')

//调用： 服务端渲染index时 /客户端导航到index时
Index.getInitialProps = async ({ req, res, reduxStore }) => {
    const user = reduxStore.getState().user;
    if (!user || !user.id ) {
        return {
            userRepos: null,
            userStarredRepos: null
        }
    }
    if (!isServer) { //服务端环境不使用缓存
        const userRepos = cache.get('userRepos');
        const userStarredRepos = cache.get('userStarredRepos')
        if (userRepos && userStarredRepos) {
            return {
                userRepos,
                userStarredRepos    
            }
        }
    }

    const userReposResp = await api.request(
        { url: '/user/repos' }, 
        req, 
        res
    );
    const userStarredReposResp = await api.request(
        { url: '/user/starred'},
        req,
        res
    );
    return {
        userRepos: userReposResp.data || [],
        userStarredRepos: userStarredReposResp.data || []
    }
}

