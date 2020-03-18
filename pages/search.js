import Router, { useRouter } from 'next/router'
import { memo, isValidElement, useEffect } from 'react'
import { Row, Col, List, Pagination, Statistic, Icon } from 'antd'
import Link from 'next/link'
import Repo from '../components/Repo'
import { cacheArray } from '../lib/repo-basic-cache'
const api = require('../lib/api')

const LANGUAGES = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Java', 'Rust', 'Python', 'C#', 'Swift', 'C++', 'C'];
const SORT_TYPES = [
    {
        name: 'Best Match',
    },  
    {
        name: 'Most Stars',
        value: 'stars',
        order: 'desc',
    },
    {
        name: 'Fewest Stars',
        value: 'stars',
        order: 'asc',
    },
    {
        name: 'Most Forks',
        value: 'forks',
        order: 'desc',
    },
    {
        name: 'Fewest Forks',
        value: 'forks',
        order: 'asc',
    },
];
const per_page = 10;
const selectedItemStyle = {
    borderLeft: '2px solid #e36209',
    fontWeight: 100,
}
const initRepos = {
    total_count: 0,
    items: []
};
const isServer = typeof window === 'undefined';
function noop() { }

const FilterLink = memo(({ name, q, lang, sort, order, page }) => {
    let queryString = `?q=${q}`;
    lang && (queryString += `&lang=${lang}`);
    sort && (queryString += `&sort=${sort}&order=${order || 'desc'}`);
    page && (queryString += `&page=${page}`);
    queryString += `&per_page=${per_page}`;
    
    //不用<a onClick />而是用href的方式是为了更好的SEO
    //Link对应的是pages下的路由
    return (
        <Link href={`/search${queryString}`}> 
            {isValidElement(name) ? name : <a>{name}</a>}
        </Link>
    )
});

export default function Search({ repos = initRepos, colors }) {
    const router = useRouter();
    const { ...querys } = router.query;
    Object.keys(querys).forEach(key => {
        querys[key] = decodeURIComponent(querys[key]);
    })
    const { q, sort, order, lang, page } = querys;

    useEffect(() => {
        if (!isServer) {
            cacheArray(repos.items)
        }
    })

    const resetLanguage = () => {
        const queryObj = {};
        q && (queryObj['q'] = q);
        sort && (queryObj['sort'] = sort);
        order && (queryObj['order'] = order);
        per_page && (queryObj['per_page'] = per_page);

        Router.push({
            pathname: '/search',
            query: queryObj
        })
    }
    return (
        <div className="root">
            <Row gutter={20}>
                <Col span={6}>
                    <List
                        bordered
                        header={<span className="list-header">Languages</span>}
                        style={{ marginBottom: 20 }}
                        dataSource={LANGUAGES}
                        renderItem={item => {
                            const selected = item === lang;
                            return (                                
                                <List.Item 
                                    style={selected ? selectedItemStyle : null}
                                    actions={selected ? 
                                        [<Icon 
                                            type="close-circle" 
                                            theme="filled" 
                                            onClick={resetLanguage}
                                        />] 
                                        : null
                                    }
                                >
                                    {selected ?
                                        <span>{item}</span>
                                        :
                                        <FilterLink
                                            {...querys}
                                            lang={item}
                                            name={item}
                                            page={null}
                                        />
                                    }
                                </List.Item>
                            )
                        }}
                    />

                    <List
                        bordered
                        header={<span className="list-header">Sort By</span>}
                        dataSource={SORT_TYPES}
                        renderItem={item => {
                            let selected = false;
                            if (item.name === 'Best Match' && !sort) {
                                selected = true;
                            } else if (item.value === sort && item.order === order) {
                                selected = true;
                            }
                            return (
                                <List.Item style={selected ? selectedItemStyle : null}>
                                    {selected ? <span>{item.name}</span> :
                                        <FilterLink
                                            {...querys}
                                            name={item.name}
                                            sort={item.value}
                                            order={item.order}
                                            page={null}
                                        />
                                    }
                                </List.Item>
                            )
                        }}
                    />
                </Col>
                <Col span={18}>
                    <h3 className="repos-title">
                        <Statistic value={repos.total_count} />
                        <span>&nbsp;repository results</span>
                    </h3>
                    {repos.items && repos.items.map(repo => (
                        <Repo repo={repo} key={repo.id} colors={colors} />
                    ))}
                    <div className="pagination">
                        <Pagination
                            pageSize={per_page}
                            current={+page || 1}
                            total={1000} //github限制返回1000条
                            onChange={noop}
                            itemRender={(page, type, ol) => {
                                const p = type === 'page' ? page : type === 'prev' ? page - 1 : page + 1;
                                const name = type === 'page' ? page : ol;
                                return (
                                    <FilterLink
                                        {...querys}
                                        page={p}
                                        name={name}
                                    />
                                )
                            }}
                        />
                    </div>
                </Col>
            </Row>
            <style jsx>{`
                .root {
                    padding: 30px 0;
                }
                .repos-title {
                    border-bottom: 1px solid #ddd;
                    font-size: 24px;
                    line-height: 1.5;
                    padding-bottom: 20px;
                    display: flex;
                    justify-content: flex-start;
                }
                .list-header {
                    font-weight: 700;
                    font-size: 16px;
                }
                .list-item {
                    position: relative;
                }
                .close-circle {
                    position: absolute;
                    right: 20px;
                    top: 20px;
                }
                .pagination {
                    padding: 20px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}

Search.getInitialProps = async ({ query, asPath, req, res }) => {
    console.log('Search getInitialProps called');
    if (!query.q) {
        return {
            repos: initRepos
        }
    }
    
    const queryArr = asPath.split('?')[1].split('&');
    const queryObj = queryArr.reduce((obj, entry) => {
        const entryArr = entry.split('=');
        obj[entryArr[0]] = encodeURIComponent(entryArr[1]); //C++ -> C%2B%2B
        return obj; 
    }, {});
    const { q, lang, sort, order, page, per_page} = queryObj;
    // ?q=react+language:javascript&sort=stars&order=desc&page=2
    let queryString = `?q=${q}`;
    lang && (queryString += `+language:${lang}`);
    sort && (queryString += `&sort=${sort}&order=${order || 'desc'}`);
    page && (queryString += `&page=${page}`);
    queryString += `&per_page=${per_page}`;
    
    const result = await api.request({ 
        url: `/search/repositories${queryString}` 
    }, req, res);

    return {
        repos: result.data
    }
}