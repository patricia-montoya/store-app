import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default function (WrappedComponent, mapStateToProps, actionCreators) {
    class withConnect extends React.Component {
        constructor(props) {
            super(props)
            console.log(props)
            const { dispatch } = props
            this.boundActionCreators = bindActionCreators(actionCreators, dispatch)
        }
        render() {
            return <WrappedComponent {...this.props} {...this.boundActionCreators}/>
        }
    }

    return connect(mapStateToProps)(withConnect)
}
