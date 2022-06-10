import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions";

/**
 * @author
 * @function Signup
 **/

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.loading) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setpassword("");
    }
  }, [user.loading]);

  const userSignup = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }
  if (user.loading) {
    return <p>Loading...!</p>;
  }
  return (
    <>
      <Layout />

      <div
        className="text-center"
        style={{
          margin: "5rem",
          background: "#9BEDDD",
          padding: "70px",
          borderRadius: "30px",
        }}
      >
        <h1>Welcome to Signup</h1>
        <i>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </i>
      </div>
      <Container>
        {user.message}
        <Row style={{ marginBottom: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="Enter first name"
                    value={firstName}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>

                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Enter last name"
                    value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>

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
              <Button
                variant="info"
                type="submit"
                style={{ marginTop: "10px" }}
              >
                Signup
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
