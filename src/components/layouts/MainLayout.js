import React from 'react'
import { Layout } from '../Styled/Layouts'
import Toolbar from './Toolbar'

class MainLayout extends React.Component {
    render() {
        console.log(this.props)

        return <Layout>
            <Toolbar isAuth={this.props.isAuthenticated}/>
            <main className="main-content"> { this.props.children }</main>
        </Layout>
    }
};

export default MainLayout;