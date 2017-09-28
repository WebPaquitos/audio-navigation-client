import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FaMicrophone, FaSoundcloud } from 'react-icons/lib/fa';
import { listen, navigate } from '../actions';

const StyledJarvis = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: ${({ listening }) => listening ? '75px' : '100px'};
    bottom: ${({ listening }) => listening ? '50px' : '80px'};
    height: ${({ listening }) => listening ? '150px' : '100px'};
    width: ${({ listening }) => listening ? '150px' : '100px'};
    background-color: ${({ listening }) => listening ? '#B71C1C' : '#C62828'};
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(0,0,0,.3);
    color: #fff;
    cursor: pointer;
    font-size: 50px;
    transition: all 200ms;
    &:hover {
        background-color: #B71C1C;
    }
`;

class Jarvis extends Component {
    constructor(props) {
        super(props);
        this.onListen = this.onListen.bind(this);
    }

    componentDidUpdate() {
        const { nextTarget, history } = this.props;
        if (nextTarget) {
            this.props.navigate(nextTarget, () => {
                history.push(`/${nextTarget}`);
            });
        }
    }

    onListen() {
        this.props.listen();
    }

    renderIcon() {
        const { listening } = this.props;
        if (listening) return <FaSoundcloud key={1}/>;
        return <FaMicrophone key={2}/>;
    }

    render() {
        const { listening } = this.props;
        return (
            <StyledJarvis onClick={this.onListen} listening={listening}>
                {this.renderIcon()}
            </StyledJarvis>
        );
    }
}

function mapStateToProps({ jarvis: { listening, currentTarget, nextTarget } }) {
    return {
        listening,
        currentTarget,
        nextTarget,
    };
}

export default connect(mapStateToProps, {
    listen,
    navigate,
})(Jarvis);
