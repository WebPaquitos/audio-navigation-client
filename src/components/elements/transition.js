import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const Transitionable = (
    {
        children,
        transitionName = 'fade',
        transitionEnterTimeout = 500,
        transitionLeaveTimeout = 300,
    }) => {
    return (
        <ReactCSSTransitionGroup
            transitionName={transitionName}
            transitionEnterTimeout={transitionEnterTimeout}
            transitionLeaveTimeout={transitionLeaveTimeout}
            style={{ display: 'flex', alignItems: 'center' }}>
            {children}
        </ReactCSSTransitionGroup>
    );
};
