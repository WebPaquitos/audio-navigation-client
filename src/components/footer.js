import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Row, Button } from 'reactstrap';
import { Column } from './elements';

const StyledFooter = styled.footer`
    background-color: #333;
    width: 100vw;
`;

export default () => {
    return (
        <StyledFooter>
            <Container>
                <Row>
                    <Column style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fafafa' }}>
                        <small>© WebPaquitos. 2017</small>
                        <br/>
                        <Button to="/contacts" tag={Link} color="link" size="sm">Contact us</Button>
                    </Column>
                </Row>
            </Container>
        </StyledFooter>
    );
};
