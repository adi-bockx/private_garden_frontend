import React, { Fragment, useState, useEffect } from 'react'
import Breadcrumb from '../../layout/breadcrumb'
import { Monthlysales, columnCharts, totalearning, Riskfactorchart } from '../dashboard/chartsData/apex-charts-data'
import { Container, Row, Col, Card, CardBody, CardHeader, Input,
    Label,
    Form,
    FormGroup,
    InputGroup, InputGroupText } from 'reactstrap'
import { lineChart1, lineChart2, lineChart3, barChart, radialChart, radialChartLive, progress1, progress2, progress3, progress4, progress5, columnChart, browserUses, product, turnOver, monthlySale, uses } from '../dashboard/charts-data'
import Chart from 'react-apexcharts'
const primary = localStorage.getItem('default_color')

const Charts = () => {

  const boxMullerRandom = () => {
    let phase = false,
      x1, x2, w;

    return (function () {
      if (phase !== !phase) {
        do {
          x1 = 2.0 * Math.random() - 1.0;
          x2 = 2.0 * Math.random() - 1.0;
          w = x1 * x1 + x2 * x2;
        } while (w >= 1.0);

        w = Math.sqrt((-2.0 * Math.log(w)) / w);
        return x1 * w;
      } else {
        return x2 * w;
      }
    })();
  }

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let interval = setInterval(() => {
      setChartData(chartData.concat([boxMullerRandom()]))
    }, 1000);
    return () => clearInterval(interval);
  }, [chartData])

  return (
    <Fragment>
      <Breadcrumb parent="Widgets" title="Ranking Stats" />
      <Container fluid={true}>
        <Row>
          <Col xl="6" className="risk-col box-col-12">
            <Card className="total-users">
              <CardHeader className="card-no-border">
                <h5>{"Actual Rank"}</h5>
              </CardHeader>
              <CardBody className="pt-0">
                <div className="apex-chart-container goal-status text-center row">
                  <div className="rate-card col-xl-12">
                    <div className="goal-chart">
                      <Chart id="riskfactorchart" options={Riskfactorchart.options} series={Riskfactorchart.series} type='radialBar' height={350} />
                    </div>
                    <div className="goal-end-point">
                      <ul>
                        <li className="mt-0 pt-0">
                          <h6 className="font-primary">{"As From"}</h6>
                          <h6 className="f-w-400">{"24 March 2021"}</h6>
                        </li>
                        <li>
                          <h6 className="mb-2 f-w-400">{"Total Direct Sales"}</h6>
                          <h5 className="mb-0">{"$94,000.20"}</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6" md="12" className="box-col-12">
            <Card className="o-hidden">
              <CardHeader>
                <h5>{"Next Rank"}</h5>
              </CardHeader>
              <div className="bar-chart-widget">
                <div className="top-content bg-primary"></div>
                <CardBody className="bottom-content pt-0">
                  <Row>
                    <Col xs="12">
                      <div id="chart-widget5">
                        <Chart options={radialChart.options} series={radialChart.series} height="360" type="radialBar" />
                      </div>
                    </Col>
                  </Row>
                  {/* <Row className="text-center f-w-600">
                    <Col xs="3" className="b-r-light">
                      
                    </Col>
                    <Col xs="4" className="b-r-light">
                      <div><span className="text-muted mt-2 mb-2 block-bottom">{"Direct Sales"}</span>
                        <h4 className="num m-0"><span className="counter color-bottom">{"69"}</span>{"$"}</h4>
                      </div>
                    </Col>
                    <Col xs="5">
                    </Col>
                  </Row> */}
                </CardBody>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col xl="12" md="12" className="box-col-6">
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
        </Row>
      </Container>
    </Fragment>
  )
}
export default Charts
