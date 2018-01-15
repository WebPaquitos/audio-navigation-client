import React from 'react';
import {
    Container,
    Row,
    Jumbotron,
    Button,
} from 'reactstrap';
import { ReactAudioAssistantWithRedux } from 'react-audio-assistant';

import { Section, Column } from './elements';

export default ({ history }) => {
    return (
        <Section>
            <Container>
                <Row>
                    <Column style={{ paddingBottom: 0 }}>
                        <Jumbotron style={{
                            height: 'calc(100vh - 96px)',
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            marginBottom: 0,
                            boxShadow: '0 0 10px rgba(0,0,0,.3)' }}>
                            <Container fluid>
                                <h1 className="display-3">Hello, world!</h1>
                                <p className="lead">
                                    This is a simple hero unit, a simple
                                    Jumbotron-style component for calling extra attention to featured content or information.
                                </p>
                                <hr className="my-2" />
                                <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                                <p className="lead">
                                    <Button color="primary">Learn More</Button>
                                </p>
                            </Container>
                        </Jumbotron>
                    </Column>
                </Row>
            </Container>
            <ReactAudioAssistantWithRedux
                token="8fd7835cb9ea4a97849eb376652e3e4e"
                navigate={target => history.push(target)}/>
        </Section>
    );
};
