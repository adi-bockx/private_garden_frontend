import React,{useState} from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label, Button,NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import {Twitter,Facebook,GitHub} from 'react-feather'
import {Password,SignIn,EmailAddress,RememberPassword,ForgotPassword ,CreateAccount,FIREBASE,AUTH0,JWT,LoginWithJWT} from '../../constant';

const Logins = (props) => {

  const [togglePassword,setTogglePassword] = useState(false)
  const [password,setPassword] = useState("")
  const [selected, setSelected] = useState("firebase");

  const handleChange = (e) => {
    setPassword(e.target.value)
  }
  const HideShowPassword  = (tPassword) => {
    setTogglePassword(!tPassword)
  }

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">     
          <div className="login-card">
            <div>
              <div>
                <a className="logo" href="#javascript">
                  <img className="img-fluid for-light" src={require("../../assets/images/logo/login.png")} alt=""/>
                  <img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt=""/>
                </a>
              </div>
              <div className="login-main login-tab"> 
                <Nav className="border-tab flex-column" tabs>
                  <NavItem>
                    <NavLink className={selected === 'firebase' ? 'active' : ''} onClick={() => setSelected('firebase')}>
                      <img src={require("../../assets/images/firebase.svg")} alt="" />
                      <span>{FIREBASE}</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={selected === 'jwt' ? 'active' : ''} onClick={() => setSelected('jwt')}>
                    <img src={require("../../assets/images/jwt.svg")} alt="" />
                    <span>{JWT}</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={selected === 'auth0' ? 'active' : ''} onClick={() => setSelected('auth0')}>
                    <img src={require("../../assets/images/auth0.svg")} alt="" />
                    <span>{AUTH0}</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={selected} className="content-login">
                  <TabPane  className="fade show" tabId={selected === "firebase" ? "firebase" : "jwt"}>
                    <Form className="theme-form">
                      <h4>{selected === "firebase" ? "Sign In With Firebase" : "Sign In With Jwt"}</h4>
                      <p>{"Enter your email & password to login"}</p>
                      <FormGroup>
                        <Label className="col-form-label">{EmailAddress}</Label>
                        <Input className="form-control" type="email" required="" placeholder="Test@gmail.com"/>
                      </FormGroup>
                      <div className="mb-3 position-relative">
                        <Label className="col-form-label">{Password}</Label>
                        <Input className="form-control" type={togglePassword ?  "text" : "password" } name="login[password]" value={password} onChange={(e) => handleChange(e)} required="" placeholder="*********"/>
                        <div className="show-hide" onClick={() => HideShowPassword(togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                      </div>
                      <div className="login-btn mb-0">
                        <div className="checkbox ms-3">
                          <Input id="checkbox1" type="checkbox"/>
                          <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                        </div>
                        <a className="link" href="#javascript">{ForgotPassword}</a>
                        {selected === "firebase" ?
                          <Button color="primary">{SignIn}</Button>
                          :
                          <Button color="primary">{LoginWithJWT}</Button>
                        }
                      </div>
                      <h6 className="text-muted mt-4 or">{"Or Sign in with"}</h6>
                      <div className="social mt-4">
                        <div className="btn-showcase">
                          <Button color="light">
                            <Facebook className="txt-fb" />
                          </Button>
                          <Button color="light">
                            <i className="icon-social-google txt-googleplus"></i>
                          </Button>
                          <Button color="light">
                            <Twitter className="txt-twitter" />
                          </Button>
                          <Button color="light">
                            <GitHub />
                          </Button>
                        </div>
                      </div>
                      <p className="mt-4 mb-0">{"Don't have account?"}<a className="ms-2" href="#javascript">{CreateAccount}</a></p>
                    </Form>
                  </TabPane>
                  <TabPane  className="fade show" tabId="auth0">
                  <div className="auth-content">
                      <img src={require("../../assets/images/auth-img.svg")} alt="" />
                      <h4>{"Welcome to login with Auth0"}</h4>
                      <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"}</p>
                      <Button color="info">{AUTH0}</Button> 
                  </div>
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

export default Logins;