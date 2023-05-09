import React, { Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import DataTable from "react-data-table-component";
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

const TransactionHistory = () => {
  return (
    <Fragment>
      <Breadcrumb parent="ECommerce" title="Transaction History" />
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
                        <div className="col-5">
                          <span>{TotalDone}</span>
                          <h3 className="total-num counter">
                            <CountUp end={25630} />
                          </h3>
                        </div>
                        <div className="col-7">
                          <div className="text-md-end">
                            <ul>
                              <li>
                                {Deposit}
                                <span className="product-stts txt-success ms-2">
                                  {"8989"}
                                  <i className="icon-angle-up f-12 ms-1"></i>
                                </span>
                              </li>
                              <li>
                                {Withdraw}
                                <span className="product-stts txt-danger ms-2">
                                  {"2560"}
                                  <i className="icon-angle-down f-12 ms-1"></i>
                                </span>
                              </li>
                            </ul>
                          </div>
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
                        <div className="col-5">
                          <span>{Pending}</span>
                          <h3 className="total-num counter">
                            <CountUp end={8943} />
                          </h3>
                        </div>
                        <div className="col-7">
                          <div className="text-md-end">
                            <ul>
                              <li>
                                {Deposit}
                                <span className="product-stts txt-success ms-2">
                                  {"8989"}
                                  <i className="icon-angle-up f-12 ms-1"></i>
                                </span>
                              </li>
                              <li>
                                {Withdraw}
                                <span className="product-stts txt-danger ms-2">
                                  {"2560"}
                                  <i className="icon-angle-down f-12 ms-1"></i>
                                </span>
                              </li>
                            </ul>
                          </div>
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
                          <span>{Running}</span>
                          <h3 className="total-num counter">
                            <CountUp end={2500} />
                          </h3>
                        </div>
                        <div className="col-7">
                          <div className="text-md-end">
                            <ul>
                              <li>
                                {Deposit}
                                <span className="product-stts txt-success ms-2">
                                  {"8989"}
                                  <i className="icon-angle-up f-12 ms-1"></i>
                                </span>
                              </li>
                              <li>
                                {Withdraw}
                                <span className="product-stts txt-danger ms-2">
                                  {"2560"}
                                  <i className="icon-angle-down f-12 ms-1"></i>
                                </span>
                              </li>
                            </ul>
                          </div>
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
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{TransactionHistoryTitle} </h5>
                <span>{TransactionHistoryDesc}</span>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    columns={productColumns}
                    data={productData}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default TransactionHistory;
