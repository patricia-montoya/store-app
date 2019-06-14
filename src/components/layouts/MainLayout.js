import React from 'react'
import { Layout } from '../Styled/Layouts'
import Toolbar from './Toolbar'

const MainLayout = (props) => {
    return <Layout>
        <Toolbar />
        <main className="main-content"> { props.children }</main>
    </Layout>
};

export default MainLayout;