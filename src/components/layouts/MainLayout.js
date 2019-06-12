import React from 'react'
import { Layout } from '../styled/Layouts'
import Toolbar from '../layouts/Toolbar'
import { Cart } from '../styled/Cart'

const MainLayout = (props) => {
    return <Layout>
        <Toolbar />
        <main className="main-content"> { props.children }</main>
    </Layout>
};

export default MainLayout;