import React,{useState} from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label, Button,NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import {Twitter,Facebook,GitHub} from 'react-feather'
import {Password,SignIn,EmailAddress,RememberPassword,ForgotPassword ,CreateAccount,FIREBASE,AUTH0,JWT,LoginWithJWT} from '../../constant';

const Login = () => {

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">     
          <div className="login-card">
            <div>
              <div>
                <a className="logo" href="#javascript">
                  <img className="img-fluid for-light" src={require("../../assets/images/logo/login.png")} alt=""/>
                  <img className="img-fluid for-dark" src={require("../../assets/images/logo.png")} alt=""/>
                </a>
              </div>
              <div className="login-main login-tab"> 
                <TabContent className="content-login">
                  <TabPane  className="fade show">
                    <Form className="theme-form">
                      <h4>{"Sign In With Metamask"}</h4>
                      <p>{"Connect with wallet to login"}</p>
                      <div className="login-btn mb-0">
                          <Button color="primary">{"Connect"}</Button>
                      </div>
                    </Form>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </Col>
        </Row>
      </Container>
  );
}

export default Login;