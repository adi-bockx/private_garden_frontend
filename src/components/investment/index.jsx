import React, { Fragment, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
} from "reactstrap";
import {
  SimplePricingCard,
  PlansList,
  Standard,
  LorumIpsum,
  Purchase,
  Business,
  Premium,
  Extra,
  BuyPlan,
} from "../../constant";

import PoolButton from "./poolButton";

const Pricing = (props) => {
  const [rookie, setRookie] = useState(0);
  const [pro, setPro] = useState(1000);
  const [master, setMaster] = useState(1000);

  const handleRookieChange = (event) => {
    setRookie(event.target.value);
  };

  const handleProChange = (event) => {
    setPro(event.target.value);
  };

  const handleMasterChange = (event) => {
    setMaster(event.target.value);
  };

  return (
    <Fragment>
      <Breadcrumb parent="Crypto MLM" title="Investment Plans" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{PlansList}</h5>
              </CardHeader>
              <CardBody>
                <Row className="pricing-block">
                  <Col lg="4" md="6 box-col-6">
                    <div className="pricingtable">
                      <div className="pricingtable-header">
                        <h3 className="title">{"Rookie Garden"}</h3>
                      </div>
                      <div className="price-value">
                        <span className="currency">{"USDT"}</span>
                        <span className="amount" style={{ fontSize: "40px" }}>
                          {rookie}
                        </span>
                      </div>
                      <ul className="pricing-content">
                        <li>{"Min Invest 50 USDT"}</li>
                        <li>{"Max Invest 25,000 USDT"}</li>
                        <li>{"Daily Profits +0.4%"}</li>
                        <li>{"Balance Locked Time 3/month"}</li>
                        <li>{"Initial Investment + ROI 136%"}</li>
                      </ul>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Input
                          className="form-control digits mb-3"
                          style={{ width: "80%", borderColor: "white" }}
                          type="number"
                          placeholder="Enter USDT"
                          value={rookie}
                          onChange={handleRookieChange}
                        />
                      </div>
                      {rookie < 50 && (
                        <div style={{ color: "rgb(255 90 90)" }}>
                          Minimum USDT Amount Should be 50 USDT
                        </div>
                      )}
                      <div className="pricingtable-signup">
                        <PoolButton poolInvestment={rookie} poolType={0} minimum={50} />
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="6 box-col-6">
                    <div className="pricingtable">
                      <div className="pricingtable-header">
                        <h3 className="title">{"Rookie Garden"}</h3>
                      </div>
                      <div className="price-value">
                        <span className="currency">{"USDT"}</span>
                        <span className="amount" style={{ fontSize: "40px" }}>
                          {pro}
                        </span>
                      </div>
                      <ul className="pricing-content">
                        <li>{"Min Invest 1000 USDT"}</li>
                        <li>{"Max Invest 25,000 USDT"}</li>
                        <li>{"Daily Profits +0.46%"}</li>
                        <li>{"Balance Locked Time 6/month"}</li>
                        <li>{"Initial Investment + ROI 184%"}</li>
                      </ul>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Input
                          className="form-control digits mb-3"
                          style={{ width: "80%", borderColor: "white" }}
                          type="number"
                          placeholder="Enter USDT"
                          value={pro}
                          onChange={handleProChange}
                        />
                      </div>
                      {pro < 1000 && (
                        <div style={{ color: "rgb(255 90 90)" }}>
                          Minimum USDT Amount Should be 1000 USDT
                        </div>
                      )}
                      <div className="pricingtable-signup">
                        <PoolButton poolInvestment={pro} poolType={1} minimum={1000} />
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="6 box-col-6">
                    <div className="pricingtable">
                      <div className="pricingtable-header">
                        <h3 className="title">{"Rookie Garden"}</h3>
                      </div>
                      <div className="price-value">
                        <span className="currency">{"USDT"}</span>
                        <span className="amount" style={{ fontSize: "40px" }}>
                          {master}
                        </span>
                      </div>
                      <ul className="pricing-content">
                        <li>{"Min Invest 1000 USDT"}</li>
                        <li>{"Max Invest 85,000 USDT"}</li>
                        <li>{"Daily Profits +0.75%"}</li>
                        <li>{"Balance Locked Time 9/month"}</li>
                        <li>{"Initial Investment + ROI 304%"}</li>
                      </ul>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Input
                          className="form-control digits mb-3"
                          style={{ width: "80%", borderColor: "white" }}
                          type="number"
                          placeholder="Enter USDT"
                          value={master}
                          onChange={handleMasterChange}
                        />
                      </div>
                      {master < 1000 && (
                        <div style={{ color: "rgb(255 90 90)" }}>
                          Minimum USDT Amount Should be 1000 USDT
                        </div>
                      )}
                      <div className="pricingtable-signup">
                        <PoolButton poolInvestment={master} poolType={0} minimum={1000} />
                      </div>
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
};

export default Pricing;
