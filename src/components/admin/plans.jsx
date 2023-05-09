import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap'
import { SimplePricingCard,PlansList } from '../../constant';
const Pricing = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Crypto MLM" title="Pools List" />
      <Container fluid={true} >
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader> 
                    <h5>{PlansList}</h5>
                  </CardHeader>
                  <CardBody>
                    <Row className="pricing-block">
                      <Col lg="3" md="6 box-col-6">
                        <div className="pricingtable">
                          <div className="pricingtable-header">
                            <h3 className="title">{"Rookie Garden"}</h3>
                          </div>
                          <div className="price-value"><span className="currency">{"USDT"}</span><span className="amount">{"50"}</span></div>
                          <ul className="pricing-content">
                            <li>{"Daily Profits +0.25%"}</li>
                            <li>{"Balance Locked Time 3/mo"}</li>
                            <li>{"Monthly Profits +7.5%"}</li>
                          </ul>
                          <div className="pricingtable-signup"><Button color="primary" size="lg">{"Pause"}</Button></div>
                        </div>
                      </Col>
                      <Col lg="3" md="6 box-col-6">
                        <div className="pricingtable">
                          <div className="pricingtable-header">
                            <h3 className="title">{"Pro Garden"}</h3>
                          </div>
                          <div className="price-value"><span className="currency">{"USDT"}</span><span className="amount">{"50"}</span></div>
                          <ul className="pricing-content">
                            <li>{"Daily Profits +0.30%"}</li>
                            <li>{"Balance Locked Time 6/mo"}</li>
                            <li>{"Monthly Profits +9%"}</li>
                          </ul>
                          <div className="pricingtable-signup"><Button color="primary" size="lg">{"Pause"}</Button></div>
                        </div>
                      </Col>
                      <Col lg="3" md="6 box-col-6">
                        <div className="pricingtable">
                          <div className="pricingtable-header">
                            <h3 className="title">{"Master Garden"}</h3>
                          </div>
                          <div className="price-value"><span className="currency">{"USDT"}</span><span className="amount">{"50"}</span></div>
                          <ul className="pricing-content">
                            <li>{"Daily Profits +0.40%"}</li>
                            <li>{"Balance Locked Time 12/mo"}</li>
                            <li>{"Monthly Profits +12%"}</li>
                          </ul>
                          <div className="pricingtable-signup"><Button color="primary" size="lg">{"Pause"}</Button></div>
                        </div>
                      </Col>
                      <Col lg="3" md="6 box-col-6">
                        <div className="pricingtable">
                          <div className="pricingtable-header">
                            <h3 className="title">{"VIP Garden"}</h3>
                          </div>
                          <div className="price-value"><span className="currency">{"USDT"}</span><span className="amount">{"50"}</span></div>
                          <ul className="pricing-content">
                            <li>{"Daily Profits 0.50%"}</li>
                            <li>{"Balance Locked Time 24/mo"}</li>
                            <li>{"Monthly Profits +15%"}</li>
                          </ul>
                          <div className="pricingtable-signup"><Button color="primary" size="lg">{"Pause"}</Button></div>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
    </Fragment>
  );
}

export default Pricing;