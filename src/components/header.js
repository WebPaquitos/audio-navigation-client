import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import LogoImg from '../assets/img/logo.svg';

const StyledNavbar = styled(Navbar)`
    box-shadow: 0 3px 10px rgba(0,0,0,.3);
    
    img.logo {
        animation: Infinite-Spin infinite 8s linear;
    }
    
    @keyframes Infinite-Spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

class Header extends Component {
    constructor(props) {
        super(props);
        this.onToggleNavbar = this.onToggleNavbar.bind(this);
    }

    state = { isOpen: false };

    onToggleNavbar() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return (
            <header>
                <StyledNavbar color="primary" expand="md" dark fixed="top">
                    <NavbarToggler onClick={this.onToggleNavbar}/>
                    <NavbarBrand to="/" tag={Link}>
                        <img src={LogoImg} className="logo" alt="logo" style={{ height: '31px' }}/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/gallery" tag={Link}>Gallery</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contacts" tag={Link}>Contacts</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </StyledNavbar>
            </header>
        );
    }
}

export default Header;
