import withRepoBasic from '../../components/with-repo-basic'
import api from '../../lib/api'
import { Avatar, Button, Select, Spin, Icon } from 'antd'
import { useState, useCallback, useEffect } from 'react'
import Markdown from '../../components/Markdown'
import moment from 'moment'
import SearchUser from '../../components/SearchUser'
import LRU from 'lru-cache'

const { Option } = Select;
const labelsCache = new LRU({
    maxAge: 1000 * 60 * 60 * 24 //24h
});
const issuesCache = new LRU({
    maxAge: 1000 * 60 * 10 //10min
});
const isServer = typeof window === 'undefined';

function makeQueryStr(creator, state, labels) {
    let creatorStr = creator ? `creator=${creator}` : '';
    let stateStr = state ? `state=${state}` : '';
    let labelStr = '';
    if (labels && labels.length > 0) {
        labelStr = `labels=${labels.join(',')}`
    }

    const arr = [];

    creatorStr && arr.push(creatorStr)
    stateStr && arr.push(stateStr)
    labelStr && arr.push(labelStr)

    return `?${arr.join('&')}`
}

function IssueDetail({ issue }) {
    return (
        <div className="root">
            <Markdown content={issue.body} />
            <div className="actions">
                <Button 
                    size="small"
                    href={issue.html_url} 
                    target="_blank"
                >
                    open discussion page
                </Button>
            </div>
            <style jsx>{`
                .root {
                    background: #fbfbea;
                    padding: 20px;
                }
                .actions {
                    text-align: right;
                }
            `}</style>
        </div>
    )
}


function Label({ label }) {
    return (
        <>
            <span className="label" style={{ background: `#${label.color}` }}>
                {label.name}
            </span>
            <style jsx>{`
                .label {
                    display: inline-block;
                    line-height: 15px;
                    margin-left: 10px;
                    padding: 0 5px;
                    border-radius: 2px;
                    font-size: 12px;
                }
            `}</style>
        </>
    )
}

function IssueItem({ issue }) {
    const [showDetail, setShowDetail] = useState(false);

    const toggleShowDetail = useCallback(() => {
        setShowDetail(pre => !pre)
    }, [])

    return (
        <>
            <div className="issue">
                <div className="avatar">
                    <Avatar
                        src={issue.user.avatar_url}
                        shape="square"
                        size={50}
                    />
                </div>
                <div className="main-info">
                    <h6>
                        {issue.state === 'open' ? 
                            <Icon type="exclamation-circle" style={{ color: '#28a745'}}/> :
                            <Icon type="check-circle" style={{color: '#cb2431'}}/>
                        }
                        <span className="title">{issue.title}</span>
                        {issue.labels.map(label => (
                            <Label label={label} key={label.id} />
                        ))}
                    </h6>
                    <p className="sub-info">
                        <span>
                           #{issue.number} opened on {moment(issue.created_at).format("LL")} by {issue.user && issue.user.login}
                        </span>
                    </p>
                    <Button
                        type="primary"
                        size="small"
                        style={{ position: 'absolute', right: 10, top: 10 }}
                        onClick={toggleShowDetail}
                    >
                        {showDetail ? 'hide' : 'detail'}
                    </Button>
                </div>
                <style jsx>{`
                    .issue {
                        display: flex;
                        position: relative;
                        padding: 10px;
                    }    
                    .issue:hover {
                        background: #fafafa;
                    }
                    .issue + .issue {
                        border-top: 1px solid #ddd;
                    }
                    .main-info > h6 {
                        max-width: 600px;
                        font-size: 16px;
                        padding-right: 40px;
                    }
                    .title {
                        margin-left: 5px;
                    }
                    .avatar {
                        margin-right: 20px;
                    }
                    .sub-info {
                        margin-bottom: 0;
                        font-size: 12px;
                    }
                    .sub-info > span + span {
                        display: inline-block;
                        margin-left: 20px;
                        font-size: 12px;
                    }
                `}</style>
            </div>
            {showDetail ? <IssueDetail issue={issue} /> : null}
        </>
    )
}


function Issues({ initIssues, labels, owner, name }) {
    const [creator, setCreator] = useState();
    const [state, setState] = useState();
    const [label, setLabel] = useState();
    const [issues, setIssues] = useState(initIssues);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        if (!isServer) {
            labelsCache.set(`${owner}/${name}`, labels)
        }
    }, [owner, name, labels])

    const handleCreatorChange = useCallback((value) => {
        setCreator(value)
    }, [])
    const handleStateChange = useCallback((value) => {
        setState(value)
    }, [])
    const handleLabelChange = useCallback((value) => {
        setLabel(value)
    }, [])
    const handleSearch = useCallback(() => {
        setFetching(true);
        api.request({
            url: `/repos/${owner}/${name}/issues${makeQueryStr(creator, state, label)}`
        })
        .then(resp => {
            setIssues(resp.data);
            setFetching(false);
        })
    }, [owner, name, creator, state, label])

    return (
        <div className="root">
            <div className="search">
                <SearchUser
                    value={creator}
                    onChange={handleCreatorChange}
                />
                <Select
                    placeholder="state"
                    value={state}
                    onChange={handleStateChange}
                    style={{ width: 150, marginLeft: 10 }}
                >
                    <Option value="all">all</Option>
                    <Option value="open">open</Option>
                    <Option value="closed">closed</Option>
                </Select>
                <Select
                    mode="multiple"
                    placeholder="label"
                    value={label}
                    onChange={handleLabelChange}
                    style={{ width: 150, marginLeft: 10, flexGrow: 1 }}
                >
                    {
                        labels.map(label => (
                            <Option value={label.name} key={label.id}>{label.name}</Option>
                        ))
                    }
                </Select>
                <Button
                    type="primary"
                    onClick={handleSearch}
                    disabled={fetching}
                    style={{ marginLeft: 10 }}
                >
                    search
                </Button>
            </div>
            <div className="issues">
                <Spin spinning={fetching}>
                    {issues.map(issue => <IssueItem key={issue.id} issue={issue} />)}
                </Spin>
            </div>
            <style jsx>{`
                .search {
                    display: flex;
                }
                .issues {
                    border: 1px solid #eee;
                    border-radius: 5px;
                    margin: 20px 0;
                }    
            `}</style>
        </div>
    )
}

Issues.getInitialProps = async ({ query, req, res }) => {
    const { owner, name } = query;
    const fullName = `${owner}/${name}`;

    let issues = [];
    if (issuesCache.get(fullName)) {
        issues = issuesCache.get(fullName);
    } else {
        const issuesResp = await api.request({
            url: `/repos/${owner}/${name}/issues`
        }, req, res);
        issues = issuesResp.data;
        if (!isServer) {
            issuesCache.set(fullName, issues);
        }
    }

    let labels = [];
    if (labelsCache.get(fullName)) {
        labels = labelsCache.get(fullName);
    } else {
        const labelsResp = await api.request({
            url: `/repos/${owner}/${name}/labels`
        }, req, res);
        labels = labelsResp.data;
    }

    return {
        initIssues: issues,
        labels,
        owner,
        name,
    }
}

export default withRepoBasic(Issues, 'issues')