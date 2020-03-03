import React from 'react'
import createSore from '../store/store'

const isServer = typeof window === 'undefined'
const __NEXT_REUDX_STORE__ = '__NEXT_REUDX_STORE__'

function getOrCreateStore(initialState) {
    //服务端每次都要创建一个新的store
    if (isServer) {
        return createSore(initialState)
    }
    //客户端是唯一的store
    if (!window[__NEXT_REUDX_STORE__]) {
        window[__NEXT_REUDX_STORE__] = createSore(initialState)
    }
    return window[__NEXT_REUDX_STORE__]
}

export default Comp => {
    class WithReduxApp extends React.Component {
        constructor(props) {
            super(props)
            this.reduxStore = getOrCreateStore(props.initialReduxState)
        }

        render() {
            const { Component, pageProps, ...rest } = this.props
            return (
                <Comp
                    Component={Component}
                    pageProps={pageProps}
                    {...rest}
                    reduxStore={this.reduxStore}
                />
            )
        }
    }

    WithReduxApp.getInitialProps = async (context) => {
        const { ctx } = context;
        let reduxStore
        if (isServer) {
            //服务端环境下才有req对象
            const session = ctx.req.session
            if (session && session.userInfo) {
                reduxStore = getOrCreateStore({
                    user: session.userInfo,
                })
            } else {
                reduxStore = getOrCreateStore()
            }
        } else {
            reduxStore = getOrCreateStore()
        }

        ctx.reduxStore = reduxStore

        let appProps = {}
        if (typeof Comp.getInitialProps === 'function') {
            appProps = await Comp.getInitialProps(context)
        }

        return {
            ...appProps,
            initialReduxState: reduxStore.getState(),
        }
    }

    return WithReduxApp
}
