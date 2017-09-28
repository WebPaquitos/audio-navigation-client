import React, { Component } from 'react';
import { Section } from './elements';
import NotFoundImg from '../assets/img/404.jpg';

class NotFound404 extends Component {
    render() {
        return (
            <Section bgImg={NotFoundImg}/>
        );
    }
}

export default NotFound404;
