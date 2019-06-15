import React from 'react'
import { Layout } from '../Styled/Layouts'
import Toolbar from './Toolbar'

class MainLayout extends React.Component {
    render() {
        return <Layout>
            <Toolbar isAuth={this.props.isAuthenticated} {...this.props}/>
            <main className="main-content"> { this.props.children }</main>
        </Layout>
    }
};

export default MainLayout;