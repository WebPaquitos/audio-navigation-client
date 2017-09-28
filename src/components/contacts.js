import React, { Component } from 'react';
import {
    Container, Row, Form,
    FormGroup, Label, Input, FormText,
} from 'reactstrap';
import { Section, Column } from './elements';

class Contacts extends Component {
    render() {
        return (
            <Section>
                <Container>
                    <Row>
                        <Column>
                            <h1>Contact us!</h1>
                            <Form>
                                <Row>
                                    <Column xs={6}>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                        </FormGroup>
                                    </Column>
                                    <Column xs={6}>
                                        <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                        </FormGroup>
                                    </Column>
                                </Row>
                                <Row>
                                    <Column xs={12}>
                                        <FormGroup>
                                            <Label for="exampleUrl">Url</Label>
                                            <Input type="url" name="url" id="exampleUrl" placeholder="url placeholder" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleNumber">Number</Label>
                                            <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleDatetime">Datetime</Label>
                                            <Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleDate">Date</Label>
                                            <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleTime">Time</Label>
                                            <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleColor">Color</Label>
                                            <Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleSearch">Search</Label>
                                            <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleSelect">Select</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleSelectMulti">Select Multiple</Label>
                                            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleText">Text Area</Label>
                                            <Input type="textarea" name="text" id="exampleText" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleFile">File</Label>
                                            <Input type="file" name="file" id="exampleFile" />
                                            <FormText color="muted">
                                                This is some placeholder block-level help text for the above input.
                                                Its a bit lighter and easily wraps to a new line.
                                            </FormText>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" />{' '}
                                                Option one is this and that—be sure to include why its great
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" />{' '}
                                                Check me out
                                            </Label>
                                        </FormGroup>
                                    </Column>
                                </Row>
                            </Form>
                        </Column>
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default Contacts;
