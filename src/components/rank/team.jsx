import React, { Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import DataTable from "react-data-table-component";
import CountUp from "react-countup";
import { referralsData, referralsColumns } from "../../data/product-list";
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
      <Breadcrumb parent="ECommerce" title="My Team" />
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
                          <span>{"Total Referrals Earning"}</span>
                          <h3 className="total-num counter">
                            $ <CountUp end={25630} />
                          </h3>
                        </div>
                        <div className="col-7">
                          <div className="text-md-end">
                            
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
                          <span>{"Total Referrals"}</span>
                          <h3 className="total-num counter">
                            <CountUp end={89} />
                          </h3>
                        </div>
                        <div className="col-7">
                          <div className="text-md-end">
                           
                          </div>
                        </div>
                      </Row>
                      <div className="progress-showcase">
                        <div className="progress sm-progress-bar">
                          <div
                            className="progress-bar bg-secondary"
                            role="progressbar"
                            style={{ width: "89%" }}
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
                          <span>{"No. of referrals on 24h"}</span>
                          <h3 className="total-num counter">
                            <CountUp end={5} />
                          </h3>
                        </div>
                        <div className="col-7">
                          <div className="text-md-end">
                           
                          </div>
                        </div>
                      </Row>
                      <div className="progress-showcase mt-4">
                        <div className="progress sm-progress-bar">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "50%" }}
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
                <h5>{"My Referrals"} </h5>
                <span>{"The searching functionality provided by DataTables is useful for quickly search through the information in the table - however the search is global, and you may wish to present controls that search on specific columns."}</span>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    columns={referralsColumns}
                    data={referralsData}
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
