import App from 'next/app'
import 'antd/dist/antd.css' //add global css
import Layout from '../components/Layout'
import { Provider } from 'react-redux'  
import withRedux from '../lib/with-redux'
import Router from 'next/router'
import { Spin } from 'antd'
import { useState, useEffect } from 'react'
import json from '../lib/json'

let cached_colors = null;
const isServer = typeof window === 'undefined';

function MyApp({ Component, pageProps, reduxStore, colors }) {
    //Keeping state when navigating pages
    const [loading, setLoading] = useState(false);

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

    useEffect(() => {
        if (!isServer) {
            cached_colors = colors;
        }
    }, [colors])

    return (
        <Provider store={reduxStore}>
            {/* Persisting layout between page changes */}
            <Layout>
                <Spin tip="loading..." spinning={loading}>
                    <Component {...pageProps} colors={colors}/>
                </Spin>
            </Layout>
        </Provider>
    )
}


//define this method because blocking data requirements are needed
//for every single page in this application
MyApp.getInitialProps = async (appContext) => {
    //calls page's `getInitialProps` and fills `appProps.pageProps` 
    const appProps = await App.getInitialProps(appContext);
    if (cached_colors) {
        return {
            ...appProps,
            colors: cached_colors
        }
    }
    const colorsResp = await json.request({
        url: '/colors'
    });
    return {
        ...appProps,
        colors: colorsResp.data
    }
}

export default withRedux(MyApp)