import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';
import { login } from '../../actions'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


/**
* @author
* @function Signin
**/

const Signin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email, password
        }
        dispatch(login(user));
    }

    if (auth.authenticate) {
        return <Redirect to={`/`} />
    }

    return (
        <>
            <Layout />
            <Container>

                <div className="text-center" style={{ margin: '5rem', background: '#9BEDDD', padding: '70px', borderRadius: '30px' }}>
                    <h1>Welcome to Signin</h1>
                    <i>
                        <p>
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as opposed to using 'Content here,
                            content here', making it look like readable English.

                        </p>
                    </i>
                </div>
                <Row style={{ marginBottom: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userLogin}>
                            <Input
                                label="Email"
                                placeholder="Enter email"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Password"
                                placeholder="Enter password"
                                value={password}
                                type="password"
                                onChange={(e) => setpassword(e.target.value)}
                            />
                            <Button variant="info" type="submit" style={{ marginTop: '10px' }}>
                                Signin
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Signin