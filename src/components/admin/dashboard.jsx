import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import ApexCharts from "react-apexcharts";
import {
  Monthlysales,
  columnCharts,
  totalearning,
  Riskfactorchart,
} from "../dashboard/chartsData/apex-charts-data";
import { Currentlysale, Marketvalue } from '../dashboard/chartsData/apex-charts-data';
import {
  Dashboard,
  NewsUpdate,
  Transaction,
  Chat,
  New,
  Daily,
  Weekly,
  Monthly,
  ReferralEarning,
  CashBalance,
  SalesForcasting,
  ProductOrderValue,
  Pending,
  Yearly,
  VenterLoren,
  Done,
  JohnLoren,
  NextPayment, Timetofinish,
  TodayTotalVisits,
  ActualRank,
  TodayStockValue,
  Hot,
  TotalProfit,
} from "../../constant";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  CardFooter,
  Table,
  Input,
  Label,
  Form,
  FormGroup,
  InputGroup, InputGroupText
} from "reactstrap";
import {
  Database,
  ShoppingBag,
  MessageCircle,
  UserPlus,
  Layers,
  ShoppingCart,
  DollarSign,
  ArrowDown,
  ArrowUp,
  CloudDrizzle,
} from "react-feather";
import DatePicker from "react-datepicker";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
// import Slider from "react-slick";
import CountUp from "react-countup";
import {
  AvailableToClaim,
  TotalCNB,
  Affiliates,
  InvestedOnFarms,
} from "../../constant";
import { lineChart1, lineChart2, lineChart3, barChart, radialChart, radialChartLive, progress1, progress2, progress3, progress4, progress5, columnChart, browserUses, product, turnOver, monthlySale, uses } from '../dashboard/charts-data'
import Chart from 'react-apexcharts'

const Sample = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Default" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update">
        <Col xl="12 xl-100" className="dashboard-sec box-col-12">
            <Card className="earning-card">
              <CardBody className="p-0">
                <Row className="m-0">
                  <Col xl="3" className="earning-content p-0">
                    <Row className="m-0 chart-left">
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{Dashboard}</h5>
                        <p className="font-roboto">{"Overview of last month"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"$4055.56"} </h5>
                        <p className="font-roboto">{"This Month Earning"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"$1004.11"}</h5>
                        <p className="font-roboto">{"This Month Profit"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"90"}</h5>
                        <p className="font-roboto">{"Total Users"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left-btn"><a className="btn btn-gradient" href="#javascript">{"Summary"}</a></Col>
                    </Row>
                  </Col>
                  <Col xl="9" className="p-0">
                    <div className="chart-right">
                      <Row className="m-0 p-tb">
                        <Col xl="8" md="8" sm="8" className="col-12 p-0">
                          <div className="inner-top-left">
                            <ul className="d-flex list-unstyled">
                              <li>{Daily}</li>
                              <li className="active">{Weekly}</li>
                              <li>{Monthly}</li>
                              <li>{Yearly}</li>
                            </ul>
                          </div>
                        </Col>
                        <Col xl="4" md="4" sm="4" className="col-12 p-0 justify-content-end">
                          <div className="inner-top-right">
                            <ul className="d-flex list-unstyled justify-content-end">
                              <li>{"Online"}</li>
                              <li>{"Store"}</li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl="12">
                          <CardBody className="p-0">
                            <div className="current-sale-container">
                              <ApexCharts id="chart-currently" options={Currentlysale.options} series={Currentlysale.series} type='area' height={250} />
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </div>
                    <Row className="border-top m-0">
                      <Col xl="4" md="6" sm="6" className="ps-0">
                        <div className="media p-0">
                          <div className="media-left"><i className="icofont icofont-crown"></i></div>
                          <div className="media-body">
                            <h6>{"Total Network Payment"}</h6>
                            <p>{"$5,000.20"}</p>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4" md="6" sm="6">
                        <div className="media p-0">
                          <div className="media-left bg-secondary"><i className="icofont icofont-heart-alt"></i></div>
                          <div className="media-body">
                            <h6>{"Total Netwotk Value"}</h6>
                            <p>{"$2,657.21"}</p>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4" md="12" className="pe-0">
                        <div className="media p-0">
                          <div className="media-left"><i className="icofont icofont-cur-dollar"></i></div>
                          <div className="media-body">
                            <h6>{"Total Investments"}</h6>
                            <p>{"$9,478.50"}</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          {/* Section 1 */}
          <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <CardBody className="bg-primary b-r-4">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <Database />
                  </div>
                  <div className="media-body">
                    <span className="m-0">{AvailableToClaim}</span>
                    <h4 className="mb-0 counter">
                      <CountUp end={6659} /> USDT
                    </h4>
                    <Database className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <CardBody className="bg-secondary b-r-4">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <ShoppingBag />
                  </div>
                  <div className="media-body">
                    <span className="m-0">{InvestedOnFarms}</span>
                    <h4 className="mb-0 counter">
                      <CountUp end={9856} /> USDT
                    </h4>
                    <ShoppingBag className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <CardBody className="bg-primary b-r-4">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <MessageCircle />
                  </div>
                  <div className="media-body">
                    <span className="m-0">{TotalCNB}</span>
                    <h4 className="mb-0 counter">
                      <CountUp end={893} /> CNB
                    </h4>
                    <MessageCircle className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <CardBody className="bg-primary b-r-4">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <UserPlus />
                  </div>
                  <div className="media-body">
                    <span className="m-0">{Affiliates}</span>
                    <h4 className="mb-0 counter">
                      <CountUp end={45} />
                    </h4>
                    <UserPlus className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* Section 2 */}

          <Col xl="7 xl-100" className="box-col-12 ">
            <Row className="dash-chart">
              <Col xl="6" className="box-col-6" md="6">
                <Card className="o-hidden">
                  <CardHeader className="card-no-border">
                  <div className="ecommerce-widgets media">
                      <div className="media-body">
                        <p className="f-w-500 font-roboto">
                          {NextPayment}
                          <span className="badge pill-badge-primary ms-3">
                            
                          </span>
                        </p>
                        <h4 className="f-w-500 mb-0 f-26">
                          
                          <span className="counter">
                          {"00h:05m:35s"}
                          </span>
                        </h4>
                      </div>
                      <div className="ecommerce-box light-bg-primary">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="p-0">
                    <div className="media">
                      <div className="media-body">
                        <div className="profit-card">
                          
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6" lg="12" md="6" className="box-col-6">
                <Card className="o-hidden">
                  <CardBody>
                    <div className="ecommerce-widgets media">
                      <div className="media-body">
                        <p className="f-w-500 font-roboto">
                          {Timetofinish}
                          <span className="badge pill-badge-primary ms-3">
                            {"Pool"}
                          </span>
                        </p>
                        <h4 className="f-w-500 mb-0 f-26">
                          
                          <span className="counter">
                          {"90D 00h:00m:30s"}
                          </span>
                        </h4>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6" lg="12" md="6" className="box-col-6">
                <Card className="o-hidden">
                  <CardBody>
                    <div className="ecommerce-widgets media">
                      <div className="media-body">
                        <p className="f-w-500 font-roboto">
                          {ActualRank}
                          <span className="badge pill-badge-primary ms-3">
                            {New}
                          </span>
                        </p>
                        <h4 className="f-w-500 mb-0 f-26">
                          
                          <span className="counter">
                          {"Expert Stoner"}
                          </span>
                        </h4>
                      </div>
                      <div className="ecommerce-box light-bg-primary">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6" lg="12" md="6" className="box-col-6">
                <Card className="o-hidden">
                  <CardBody>
                    <div className="media">
                      <div className="media-body">
                        <p className="f-w-500 font-roboto">
                          {"Next Daily Payment"}
                          <span className="badge pill-badge-primary ms-3">
                            {Hot}
                          </span>
                        </p>
                        <div className="progress-box">
                          <h4 className="f-w-500 mb-0 f-26">
                            {"$"}
                            <span className="counter">
                              <CountUp end={9} />
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xl="5" md="12" className="box-col-6">
            <Card className="o-hidden">
              <div className="chart-widget-top p-3">
                <Row className="card-body">
                  <Col xs="8">
                    <h6 className="f-w-600 font-primary">{"Total Profit"}</h6><span className="num"><span className="counter">{"90"}</span>{"%"}<i className="icon-angle-up f-12 ms-1"></i></span>
                  </Col>
                  <Col xs="4" className="text-end">
                    <h4 className="num total-value">{"$"}<span className="counter">{"3654"}</span>{".00"}</h4>
                  </Col>
                </Row>
                <div>
                  <div id="chart-widget1">
                    <Chart options={lineChart1.options} series={lineChart1.series} height="190" type="area" />
                  </div>
                </div>
              </div>
            </Card>
          </Col>

          <Col xl="7" md="12" className="box-col-6">
            <Card className="o-hidden">
              <CardBody>
              <div className=" mb-0">
                        <Label>{"Referral URL"}</Label>
                        <InputGroup className="pill-input-group">
                          <InputGroupText><i className="icofont icofont-ui-copy"></i></InputGroupText>
                          <Input className="form-control" type="text" aria-label="URL" value={"https://cannabis.com/user/invite?ref=UD00002"} readOnly />
                          <InputGroupText><i className="icofont icofont-stock-search"></i></InputGroupText>
                        </InputGroup>
                      </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="5" className="box-col-6" md="12">
                <Card className="o-hidden">
                  <CardHeader className="card-no-border">
                  <div className="ecommerce-widgets media">
                      <div className="media-body">
                        <p className="f-w-500 font-roboto">
                          {"Presale Token Price"}
                          <span className="badge pill-badge-primary ms-3">
                            
                          </span>
                        </p>
                        <h4 className="f-w-500 mb-0 f-26">
                          
                          <span className="counter">
                          {"0.001 BNB"}
                          </span>
                        </h4>
                      </div>
                      <div className="ecommerce-box light-bg-primary">
                        <i className="fa fa-money" aria-hidden="true"></i>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="p-0">
                    <div className="media">
                      <div className="media-body">
                        <div className="profit-card">
                          
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

          <Col xl="3 xl-50" className="chart_data_right second d-none">
            <Card>
              <CardBody>
                <div className="media align-items-center">
                  <div className="media-body right-chart-content">
                    <h4>
                      {"$95,000"}
                      <span className="new-box">{New}</span>
                    </h4>
                    <span>{ProductOrderValue}</span>
                  </div>
                  <div className="knob-block text-center">
                    <div className="knob1" id="ordervalue2"></div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4 xl-50" className="news box-col-6">
            <Card>
              <CardHeader>
                <div className="header-top">
                  <h5 className="m-0">{NewsUpdate}</h5>
                  <div className="card-header-right-icon">
                    <div className="bottom-btn">
                      <a href="#javascript">{"View all"}</a>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="p-0">
                <div className="news-update">
                  <h6>{"36% off For pixel lights Couslations Types."}</h6>
                  <span>{"Lorem Ipsum is simply dummy..."}</span>
                </div>
                <div className="news-update">
                  <h6>{"We are produce new product this"}</h6>
                  <span>
                    {" "}
                    {"Lorem Ipsum is simply text of the printing... "}
                  </span>
                </div>
                <div className="news-update">
                  <h6>{"We are produce new product this"}</h6>
                  <span>
                    {" "}
                    {"Lorem Ipsum is simply text of the printing... "}
                  </span>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="8 xl-50" className="appointment-sec box-col-6">
            <Row>
              <Col xl="12" className="appointment">
                <Card>
                  <CardHeader className="card-no-border">
                    <div className="header-top">
                      <h5 className="m-0">{Transaction}</h5>
                      <div className="card-header-right-icon">
                        <div className="bottom-btn">
                          <a href="#javascript">{"View All"}</a>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <div className="appointment-table table-responsive">
                      <table className="table table-bordernone">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                className="img-fluid img-40 rounded-circle  mb-3"
                                src={require("../../assets/images/appointment/app-ent.jpg")}
                                alt=""
                              />
                              <div className="status-circle bg-primary"></div>
                            </td>
                            <td className="img-content-box">
                              <span className="d-block">{VenterLoren}</span>
                              <span className="font-roboto">{"28 Sept"}</span>
                            </td>
                            <td className="m-0 font-primary">
                              <span className="d-block">{"+11322.79"}</span>
                              <span className="font-roboto">
                                {"0.0000321 BTC"}
                              </span>
                            </td>

                            {/* <td>
                              <p className="m-0 font-primary">{"+11322.79"}</p>
                            </td> */}
                            <td className="text-end">
                              <div className="button btn btn-primary">
                                {Done}
                                <i className="fa fa-check-circle ms-2"></i>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="img-fluid img-40 rounded-circle  mb-3"
                                src={require("../../assets/images/appointment/app-ent.jpg")}
                                alt=""
                              />
                              <div className="status-circle bg-primary"></div>
                            </td>
                            <td className="img-content-box">
                              <span className="d-block">{JohnLoren}</span>
                              <span className="font-roboto">{"22 Sept"}</span>
                            </td>
                            <td className="m-0 font-primary">
                              <span className="d-block">{"-11322.79"}</span>
                              <span className="font-roboto">
                                {"0.0000321 BTC"}
                              </span>
                            </td>

                            <td className="text-end">
                              <div className="button btn btn-primary">
                                {Done}
                                <i className="fa fa-check-circle ms-2"></i>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="img-fluid img-40 rounded-circle  mb-3"
                                src={require("../../assets/images/appointment/app-ent.jpg")}
                                alt=""
                              />
                              <div className="status-circle bg-primary"></div>
                            </td>
                            <td className="img-content-box">
                              <span className="d-block">{JohnLoren}</span>
                              <span className="font-roboto">{"22 Sept"}</span>
                            </td>
                            <td className="m-0 font-primary">
                              <span className="d-block">{"+11322.79"}</span>
                              <span className="font-roboto">
                                {"0.0000321 BTC"}
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="button btn btn-primary">
                                {Done}
                                <i className="fa fa-check-circle ms-2"></i>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="img-fluid img-40 rounded-circle  mb-3"
                                src={require("../../assets/images/appointment/app-ent.jpg")}
                                alt=""
                              />
                              <div className="status-circle bg-primary"></div>
                            </td>
                            <td className="img-content-box">
                              <span className="d-block">{JohnLoren}</span>
                              <span className="font-roboto">{"22 Sept"}</span>
                            </td>
                            <td className="m-0 font-primary">
                              <span className="d-block">{"+11322.79"}</span>
                              <span className="font-roboto">
                                {"0.0000321 BTC"}
                              </span>
                            </td>

                            <td className="text-end">
                              <div className="button btn btn-danger">
                                {Pending}
                                <i className="fa fa-check-circle ms-2"></i>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="img-fluid img-40 rounded-circle  mb-3"
                                src={require("../../assets/images/appointment/app-ent.jpg")}
                                alt=""
                              />
                              <div className="status-circle bg-primary"></div>
                            </td>
                            <td className="img-content-box">
                              <span className="d-block">{JohnLoren}</span>
                              <span className="font-roboto">{"22 Sept"}</span>
                            </td>
                            <td className="m-0 font-primary">
                              <span className="d-block">{"+11322.79"}</span>
                              <span className="font-roboto">
                                {"0.0000321 BTC"}
                              </span>
                            </td>

                            <td className="text-end">
                              <div className="button btn btn-primary">
                                {Done}
                                <i className="fa fa-check-circle ms-2"></i>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
         
        </Row>
      </Container>
    </Fragment>
  );
};

export default Sample;
