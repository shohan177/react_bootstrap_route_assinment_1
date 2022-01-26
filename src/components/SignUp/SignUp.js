import React from 'react';
import { Container,Row,Col ,Form, Card, Button } from 'react-bootstrap';
import './SignUp.css';

const SignUp = () => {
    let handleSignUpForm = (e) => {
        e.preventDefault();

        let form_data = new FormData(e.target)
        console.log(Object.fromEntries(form_data.entries()));
        
    }
    return (
        <>
            <Container>
                <Row className='d-flex justify-content-center my-5'>
                    <Col md={5}>
                        <Card className='shadow'>
                            <Card.Body>
                                <h2>Create an Account</h2>
                                <Form onSubmit={handleSignUpForm}>
                                    <Form.Group >
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control name='name'></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control name='email'></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control name='user_name'></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Select name='edu'>
                                            <option value=''>--Select--</option>
                                            <option value=''>CSE</option>
                                            <option value=''>EEE</option>
                                            <option value=''>CS</option>  
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Gander</Form.Label>
                                        <br></br>
                                        <input name='gander' type='radio' value='male' id='male' />
                                        <label for='male'>Male</label>
                                        <input name='gander' type='radio' value='female' id='female' />
                                        <label for='male'>Female</label>
                                    </Form.Group>
                                    <Form.Group>
                                        <br/>
                                        <input type='checkbox' name='agree' value='agree' id='agree'></input>
                                        <label for='agree'>I agree</label>
                                    </Form.Group>
                                    <hr></hr>
                                    <Form.Group>
                                        <br></br>
                                        <Button variant='primary' type='submit ' className='btn-block'>SIGN UP NOW</Button>
                                    </Form.Group>

                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default SignUp;
