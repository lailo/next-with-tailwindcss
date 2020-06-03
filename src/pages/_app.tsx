import * as React from 'react'
import Router from 'next/router'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'

import '@styles/main.css'
import '@styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
