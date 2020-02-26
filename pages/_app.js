// import App from 'next/app'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'  
import withRedux from '../lib/with-redux'
import Router from 'next/router'
import { Spin } from 'antd'
import { useState, useEffect } from 'react'

console.log(`in _app${typeof window === undefined}`)

function MyApp({ Component, pageProps, reduxStore }) {
    const [loading, setLoading] = useState(false)

    const startLoading = () => {
        setLoading(true)
    }
    const stopLoading = () => {
        setLoading(false)
    }

    useEffect(() => {
        Router.events.on('routeChangeStart', startLoading)
        Router.events.on('routeChangeComplete', stopLoading)
        Router.events.on('routeChangeError', stopLoading)
        return () => {
            Router.events.off('routeChangeStart', startLoading)
            Router.events.off('routeChangeComplete', stopLoading)
            Router.events.off('routeChangeError', stopLoading)
        }
    }, [])

    return (
        <Provider store={reduxStore}>
            <Layout>
                <Spin tip="加载中..." spinning={loading}>
                    <Component {...pageProps} />
                </Spin>
            </Layout>
        </Provider>
    )
}

// MyApp.getInitialProps = async (appContext) => {}

export default withRedux(MyApp)