import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: #fafafa;
    padding-top: 56px;
    background: ${({ bgImg }) => bgImg ? `url(${bgImg}) no-repeat center` : ''};
`;

export const Section = ({ children, bgImg }) => {
    return <StyledSection bgImg={bgImg}>{children}</StyledSection>;
};
