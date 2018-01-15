import React from 'react';
import {
    Container,
    Row,
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardColumns,
    CardSubtitle,
    CardBlock,
} from 'reactstrap';
import { ReactAudioAssistantWithRedux } from 'react-audio-assistant';

import { Section, Column } from './elements';

export default ({ history }) => {
    return (
        <Section>
            <Container>
                <Row>
                    <Column>
                        <CardColumns>
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                    alt="Card image cap" />
                                <CardBlock>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                    </CardText>
                                    <Button>Button</Button>
                                </CardBlock>
                            </Card>
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                    alt="Card image cap" />
                            </Card>
                            <Card>
                                <CardBlock>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Button</Button>
                                </CardBlock>
                            </Card>
                            <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Button</Button>
                            </Card>
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                    alt="Card image cap" />
                                <CardBlock>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content.
                                        This card has even longer content than the first to show that equal height action.
                                    </CardText>
                                    <Button>Button</Button>
                                </CardBlock>
                            </Card>
                            <Card block inverse color="primary">
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button color="secondary">Button</Button>
                            </Card>
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                    alt="Card image cap" />
                                <CardBlock>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                    </CardText>
                                    <Button>Button</Button>
                                </CardBlock>
                            </Card>
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                    alt="Card image cap" />
                            </Card>
                            <Card>
                                <CardBlock>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Button</Button>
                                </CardBlock>
                            </Card>
                            <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Button</Button>
                            </Card>
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                    alt="Card image cap" />
                                <CardBlock>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content.
                                        This card has even longer content than the first to show that equal height action.
                                    </CardText>
                                    <Button>Button</Button>
                                </CardBlock>
                            </Card>
                            <Card block inverse color="primary">
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button color="secondary">Button</Button>
                            </Card>
                        </CardColumns>
                    </Column>
                </Row>
            </Container>
            <ReactAudioAssistantWithRedux navigate={target => history.push(target)}/>
        </Section>
    );
};
