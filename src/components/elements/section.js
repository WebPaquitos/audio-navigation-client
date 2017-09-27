import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: #fafafa;
    padding-top: 56px;
`;

export const Section = ({ children }) => {
    return <StyledSection>{children}</StyledSection>;
};
