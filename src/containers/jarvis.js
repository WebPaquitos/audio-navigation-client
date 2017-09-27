import React, { Component } from 'react';
import { connect } from 'react-redux';

class Jarvis extends Component {
    render() {
        return (
            <div>Jarvis here!</div>
        );
    }
}

function mapStateToProps({ jarvis }) {
    return { jarvis };
}

export default connect(mapStateToProps)(Jarvis);
