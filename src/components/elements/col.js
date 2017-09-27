import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

const StyledCol = styled(Col)`
    padding: 40px 15px;
`;

export const Column = (props) => {
    return <StyledCol {...props}>{props.children}</StyledCol>;
};
