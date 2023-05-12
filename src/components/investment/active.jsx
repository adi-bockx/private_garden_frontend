import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";
import DataTable from "react-data-table-component";
import { X } from "react-feather";
import CountUp from "react-countup";
import { productData, productColumns } from "../../data/product-list";
import {
  TransactionHistoryTitle,
  TransactionHistoryDesc,
  TotalDone,
  Done,
  Cancel,
  Pending,
  Deposit,
  Withdraw,
  Running,
  Smooth,
} from "../../constant";
import axios from "axios";

const TransactionHistory = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/orederhistory.json`)
      .then((res) => setOrders(res.data));
  }, []);

  return (
    <Fragment>
      <Breadcrumb parent="ECommerce" title="Active Pools" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row>
                  <Col xl="4 xl-50 box-col-6" md="6">
                    <Card className="ecommerce-widget">
                      <CardBody className="support-ticket-font">
                        <Row>
                          <div className="col-6">
                            <span>{"Total earned out of 150%"}</span>
                            <h3 className="total-num counter">
                              $
                              <CountUp end={25630} />
                            </h3>
                          </div>
                        </Row>
                        <div className="progress-showcase">
                          <div className="progress sm-progress-bar">
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xl="4 xl-50 box-col-6" md="6">
                    <Card className="ecommerce-widget">
                      <CardBody className="support-ticket-font">
                        <Row>
                          <div className="col-6">
                            <span>{"Pool Bouns"}</span>
                            <h3 className="total-num counter">
                              $
                              <CountUp end={8943} />
                            </h3>
                          </div>
                        </Row>
                        <div className="progress-showcase">
                          <div className="progress sm-progress-bar">
                            <div
                              className="progress-bar bg-secondary"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xl="4 xl-50 box-col-6" md="6">
                    <Card className="ecommerce-widget">
                      <CardBody className="support-ticket-font">
                        <Row>
                          <div className="col-5">
                            <span>{"Referral Reward"}</span>
                            <h3 className="total-num counter">
                              $
                              <CountUp end={2500} />
                            </h3>
                          </div>
                        </Row>
                        <div className="progress-showcase mt-4">
                          <div className="progress sm-progress-bar">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Card>
            <CardHeader>
                <h3>Active Pools</h3>
            </CardHeader>
          <CardBody>
            <Row>
              <Col xl="4" md="6">
                <div className="prooduct-details-box">
                  <div className="media">
                    <img
                      className="align-self-center img-fluid img-60"
                      src={require("../../assets/images/ecommerce/product-table-6.png")}
                      alt="#"
                    />
                    <div className="media-body ms-3">
                      <div className="product-name">
                        <h6>
                          <a href="#javascript">{"Pro Garden"}</a>
                        </h6>
                      </div>
                      <div className="price d-flex">
                        <div className="text-muted me-2">{"Price"}</div>: {"50"}{" "}
                        USDT
                      </div>
                      <div className="avaiabilty">
                        <div className="text-success">{"+0.40%"}</div>
                      </div>
                      <Button color="primary" size="xs">
                        {"Active"}
                      </Button>
                      <X className="btn-close" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default TransactionHistory;