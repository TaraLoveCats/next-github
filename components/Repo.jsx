import Link from 'next/link'
import { Icon } from 'antd'
import moment from 'moment'

export default ({ repo, colors }) => {
    const openIssuesCount = repo.open_issues_count;
    let langColor = null;
    repo.language && (langColor = colors[repo.language].color);
	return (
		<div className="root">
			<div className="repo-info">
				<h3>
					<Link href={`/detail?owner=${repo.owner && repo.owner.login}&name=${repo.name}`}>
                        <a>
                            <span className="repo-title-owner">{repo.owner.login}</span>
                            <span> / </span>
                            <span className="repo-title">{repo.name}</span>
                        </a>
					</Link>
				</h3>
				<p className="repo-desc">{repo.description}</p>
				<div className="other-info">
                    {langColor && 
                        <span 
                            style={{ 
                                display: 'inline-block',
                                background: `${langColor}`,
                                width: '10px',
                                height: '10px',
                                borderRadius: '5px',
                                marginRight: '5px'
                            }} 
                        />
                    }
                    <span className="lang">{repo.language}</span>
                    <span className="stars">
                        <Icon type="star" theme="filled" />
                        {repo.stargazers_count} 
                    </span>
                    <span className="forks">
                        <Icon type="fork" />
                        {repo.forks_count}
                    </span>
                    <span className="last-updated">
						{moment(repo.updated_at).format("LL")}
					</span>
                    {openIssuesCount > 0 &&
                        <span className="open-issues">
                            {openIssuesCount} {openIssuesCount > 1 ? 'issues need help' : 'issue needs help'}
                        </span>
                    }
                </div>
            </div>
            <style jsx>{`
                .root {
                    padding: 20px;
                }
                .root + .root { 
                    border-top: 1px solid #ddd;
                }
                .repo-title-owner {
                    font-size: 20px;
                    color: #0366d6;
                    font-weight: 400;
                }
                .repo-title {
                    font-size: 20px;
                    color: #0366d6;
                    font-weight: 500;
                }
                .other-info > span + span {
                    margin-right: 12px;
                    font-size: 12px;
                }
                .repo-desc {
                    max-width: 550px;
                    font-size: 14px;
                } */}
            `}</style>
	    </div>
    )
}
