import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { Section, Column } from './elements';

class Contacts extends Component {
    render() {
        return (
            <Section>
                <Container>
                    <Row>
                        <Column>
                            Contacts
                        </Column>
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default Contacts;
