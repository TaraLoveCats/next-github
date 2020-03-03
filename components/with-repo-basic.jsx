import Link from 'next/link'
import Repo from './Repo'
import api from '../lib/api'
import { useRouter } from 'next/router'
import { getCache, setCache } from '../lib/repo-basic-cache'
import { useEffect } from 'react'

const isServer = typeof window === 'undefined';

function makeQueryStr(queryObj) {
    const query = Object.entries(queryObj)
        .reduce((result, entry) => {
            result.push(entry.join('='));
            return result
        }, []).join('&')
        return `?${query}`
}

export default (Comp, type) => {
    function WithDetail({ repoBasic, colors, ...rest }) {
        const router = useRouter();
        const queryStr = makeQueryStr(router.query);

        useEffect(() => {
            if (!isServer) {
                setCache(repoBasic);
            } 
        })

        return (
            <div className="root">
                <div className="repo-basic">
                    <Repo repo={repoBasic} colors={colors}/>
                    <div className="tabs">
                        {type === 'index' ? 
                            <span className="selected-tab">Readme</span> : 
                            <Link href={`/detail${queryStr}`}>
                                <a className="tab index">Readme</a>
                            </Link>
                        }
                        {type === 'issues' ? 
                            <span className="selected-tab">Issues</span> :
                            <Link href={`/detail/issues${queryStr}`}>
                                <a className="tab issues">Issues</a>
                            </Link>
                        }
                    </div>
                </div>
                <div>
                    <Comp {...rest} />
                </div>
                <style jsx>{`
                    .root {
                        padding-top: 20px;
                    }    
                    .repo-basic {
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        margin-bottom: 20px;
                    }
                    .tabs {
                        padding: 20px;
                    }
                    .selected-tab {
                        font-size: 16px;
                        font-weight: 600;
                        margin-right: 20px;
                    }
                    .tab {
                        margin-right: 20px;
                    }
                `}</style>
            </div>
        )
    }

    WithDetail.getInitialProps = async (context) => {
        const { query, req, res} = context;
        const { name, owner } = query;
        const fullName = `${owner}/${name}`;

        let pageData = {};
        if (typeof Comp.getInitialProps === 'function') {
            pageData = await Comp.getInitialProps(context);
        }

        if (getCache(fullName)) {
            return {
                repoBasic: getCache(fullName),
                ...pageData
            }
        }
        const repoBasicResp = await api.request({
            url: `/repos/${owner}/${name}`
        }, req, res);  

        return {
            repoBasic: repoBasicResp.data,
            ...pageData
        };
    }

    return WithDetail
}