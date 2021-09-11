import React, { ReactElement } from 'react'

import Layout from '../components/layout'

interface Props {
    
}

export default function index({}: Props): ReactElement {
    return (
        <>
            <Layout>
                <h1>index</h1>
            </Layout>
        </>
    )
}
