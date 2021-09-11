import { AppProps } from 'next/app'
import React, { ReactElement } from 'react'
import { wrapper } from '../redux'

interface Props {
    
}

function _app({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps}/>
        </>
    )
}

export default wrapper.withRedux(_app);