import React from "react";
import Header from "../Header";
import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink exact to={`/`}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/page`}>Page</NavLink>
                </li>
                <li>
                  <NavLink to={`/category`}>Category</NavLink>
                </li>
                <li>
                  <NavLink to={`/products`}>Products</NavLink>
                </li>
                <li>
                  <NavLink to={`/orders`}>Orders</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto", paddingTop: "200px" }}>
              {props.childern}
            </Col>
          </Row>
        </Container>
      ) : (
        props.childern
      )}
    </>
  );
};

export default Layout;
