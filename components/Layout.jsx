import Link from 'next/link'
import { Layout, Input, Icon, Avatar, Tooltip, Dropdown, Menu } from 'antd'
import { useState, useCallback } from 'react'
import Container from './Container'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/store'
import { useRouter} from 'next/router'

const { Header, Content, Footer } = Layout
const footerStyle = {
    textAlign: 'center'
}
const githubIconStyle = {
    color: '#fff',
    fontSize: 40,
    display: 'block',
    paddingTop: 10,
    marginRight: 20,
}

function AppLayout({ children }) {
    const router = useRouter();
    const urlQuery = router.query && router.query.q;
    const [search, setSearch] = useState(urlQuery || '');
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSearchChange = useCallback((e) => {
        setSearch(e.target.value)
    }, []);

    const handleOnSearch = useCallback(() => {
        router.push(`/search?q=${search}`)
    }, [search]);

    const handleLogout = useCallback(() => {
        dispatch(logout())
    },[]);

    const userDropdown = (
        <Menu onClick={handleLogout}> 
            <Menu.Item>
                log out
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout>
            <Header>
                <Container renderer={<div className="header-inner"/>}>
                    <div className="header-left">
                        <div className="logo">
                            <Link href="/">
                                <a>
                                    <Icon type="github" style={githubIconStyle} />
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Input.Search 
                                placeholder="Search or jump to..."
                                value={search}
                                onChange={handleSearchChange}
                                onSearch={handleOnSearch}
                            />
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="user">
                            {user && user.id ? (
                                <Dropdown overlay={userDropdown}>
                                    <Avatar size={40} src={user.avatar_url} />
                                </Dropdown>
                            ) : (
                                <Tooltip title="Click to log in">
                                    <a href={`/prepare-auth?url=${router.asPath}`}>
                                        <Avatar size={40} icon="user" />
                                    </a>
                                </Tooltip>
                            )}
                        </div>
                    </div>
                </Container>
            </Header>
            <Content>
                {/* 改变组件的渲染类型，不能指定props */}
                {/* <Container comp="div">{children}</Container> */}
                <Container >{children}</Container>
            </Content>
            <Footer style={footerStyle}>
                Hello Tara@<a href="mailto:taralovecats@163.com">taralovecats@163.com</a>
            </Footer>
            <style jsx>{`
                .header-inner {
                    display: flex;
                    justify-content: space-between;
                }
                .header-left {
                    display: flex;
                    display: flex-start;
                }
            `}</style>  
            <style jsx global>{`
                #__next {
                    height: 100%;
                }
                .ant-layout {
                    min-height: 100%;
                }
                .ant-layout-header {
                    padding-left: 0,
                    padding-right: 0
                }
                .ant-layout-content {
                    background: #fff
                }
            `}</style>
        </Layout>
    )
}

export default AppLayout

