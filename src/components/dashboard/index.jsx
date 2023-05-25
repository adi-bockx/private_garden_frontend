import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import ApexCharts from "react-apexcharts";
import {
  Monthlysales,
  columnCharts,
  totalearning,
  Riskfactorchart,
} from "./chartsData/apex-charts-data";
import { useAccount } from 'wagmi'
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
import { lineChart1, lineChart2, lineChart3, barChart, radialChart, radialChartLive, progress1, progress2, progress3, progress4, progress5, columnChart, browserUses, product, turnOver, monthlySale, uses } from './charts-data'
import Chart from 'react-apexcharts';
const HYIPABI = require('../../data/hyipAbi.json');
const ERC20ABI = require('../../data/erc20Abi.json');
const Web3 = require('web3');
// const web3 = new Web3(process.env.REACT_APP_API_URL);
// const contract = new web3.eth.Contract(HYIPABI, process.env.REACT_APP_HYIP);
const spender = process.env.REACT_APP_HYIP;
const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/z45v7nxJqTwkqQLStytSHCLG5w3pCCok');
const contract = new web3.eth.Contract(HYIPABI, "0xcf1d455E3eeB9a6563495413DA29788836295A37");
const pvgnContract = new web3.eth.Contract(ERC20ABI, "0x86d70eB1E9f06A8F67873d0f6020d378C35a389B");
const usdtContract = new web3.eth.Contract(ERC20ABI, "0x8B7760e6cC84A4F7eE863370C3Ca0862c2c63EF7");
const Sample = (props) => {
  const GardenTier = { Rookie: 0, Master: 1, Pro: 2 };
  const { address, isConnecting, isDisconnected } = useAccount();
  const [ runningFunds, setRunningFunds ] = useState(0);
  const [ claimableStakes, setClaimableStake ] = useState(0);
  const [ timeTillNextClaim, setTimeTillNextClaim ] = useState(0);
  const [timeTillEnd, setTimeTillEnd] = useState(0);
  const [ airDroppedTokens, setAirDroppedTokens ]= useState(0);
  const [ trxData, setTrxData ] = useState([]);
  let data = [];

  useEffect(() => {
    setAirDroppedTokens(0);
    setClaimableStake(0);
    setRunningFunds(0);
    setTimeTillEnd(0);
    setTimeTillNextClaim(0);
    data = [];
    getTransactionHistory();
    queryInvestment();
  }, []);

  async function queryInvestment() {
   
    if(address){
      console.log("address", address);
       //pool investments
    try {
      let sum = 0;
      let claimTime = 0;
      let nextClaimTime = 0;
      let endTime = 0;
      // Call the mapping using the address and gardenTier as inputs
      let result = await contract.methods.investments(address, GardenTier.Rookie).call();
      console.log("result" ,result);
      sum += (result.amount/10e17);
      endTime = result.endTime;
      if(result.lastClaimTime == 0){
        claimTime = result.startTime;
        nextClaimTime = 2;
      }
      else {
        claimTime = result.lastClaimTime;
        nextClaimTime = 1; 
      }

      result = await contract.methods.investments(address, GardenTier.Master).call();
      sum += (result.amount/10e17);
      if(result.endTime > endTime){
        endTime = result.endTime;
      }
      if(result.lastClaimTime == 0){
        
        if(result.startTime > claimTime){
          nextClaimTime = 2;
          claimTime = result.startTime;
        }
        
      }
      else {
          if(result.lastClaimTime > claimTime){
            nextClaimTime = 1;
            claimTime = result.lastClaimTime;
          }
            
      }
      
      result = await contract.methods.investments(address, GardenTier.Pro).call();
      if(result.endTime > endTime){
        endTime = result.endTime;
      }
      if(result.lastClaimTime == 0){
        nextClaimTime = 2;
        if(result.startTime > claimTime)
        claimTime = result.startTime;
      }
      else {
        nextClaimTime = 1;
        if(result.lastClaimTime > claimTime)
          claimTime = result.lastClaimTime;
      }
      sum += (result.amount/10e17);
      setRunningFunds(sum);

      if(claimTime != 0 && endTime != 0){
        var DaysInSeconds = parseInt(nextClaimTime) * 24 * 60 * 60;
        var nextTimeStamp = parseInt(claimTime) + parseInt(DaysInSeconds);

        // Get the current timestamp
        var currentTime = Math.floor(Date.now() / 1000); // Convert to seconds

        // Calculate the time difference
        var timeDifference = nextTimeStamp - currentTime ;

        // Calculate the hours, minutes, and seconds
        var hours = Math.floor(timeDifference / 3600);
        var minutes = Math.floor((timeDifference % 3600) / 60);
        var seconds = timeDifference % 60;
        setTimeTillNextClaim(hours+"h:"+minutes+"m:"+seconds+"s");


        var timeDifference1 = endTime - currentTime ;

        // Calculate the hours, minutes, and seconds
        var days = Math.floor(timeDifference1 / 86400);
        var hours = Math.floor((timeDifference1 % 86400) / 3600);
        var minutes = Math.floor((timeDifference1 % 3600) / 60);
        var seconds = timeDifference1 % 60;

        setTimeTillEnd(days+"d:"+hours+"h:"+minutes+"m:"+seconds+"s");

        
      }
      else {
        setTimeTillNextClaim("00h:00m:00s");
      }

    } catch (error) {
      console.error("error1 ",error);
    }
    try {
      let result = await contract.methods.getClaimableStake(GardenTier.Rookie, address).call();
      result = result + await contract.methods.getClaimableStake(GardenTier.Pro, address).call();
      result = result + await contract.methods.getClaimableStake(GardenTier.Master, address).call();  
      setClaimableStake(result);
      
    } catch (error) {
      console.error("error" ,error);
    }
    try {
     let result = await pvgnContract.methods.balanceOf("0xcf1d455E3eeB9a6563495413DA29788836295A37").call();
     result = result / 10e17;
     result = 63000000 - result;
     setAirDroppedTokens(result);
      
    } catch (error) {
      console.error("error" ,error);
    }
  
    }
    else {
      console.log("No address found");
    }
    
  }
  async function getTransactionHistory() {
    //approval of usdt
    const transactions1 = await usdtContract.getPastEvents('Approval', {
      fromBlock: 0,
      toBlock: 'latest',
      spender: spender,
      owner: address
    });

    for (let i = 0; i < transactions1.length; i++) {
      const tx = transactions1[i];
      
      const block = await web3.eth.getBlock(tx.blockNumber);
      const timestamp = block.timestamp;
      let date = new Date(timestamp * 1000).toLocaleString();

      if (tx.returnValues.value/10e17!=0) {
        data.push({
        product_name: tx.transactionHash.slice(0,20),
        amount: tx.returnValues.value/10e17,
        event: "approve" ,
        pay_from: "USDT",
        // start_date: date.slice(0, date.indexOf(',')),
        start_date: timestamp,

      });
    }
    }

    //investment in hyip
    const transactions2 = await contract.getPastEvents('Invested', {
      fromBlock: 0,
      toBlock: 'latest',
      investor: address
    });

    for (let i = 0; i < transactions2.length; i++) {
      const tx = transactions2[i];
      
      
      const block = await web3.eth.getBlock(tx.blockNumber);
      const timestamp = block.timestamp;
      let date = new Date(timestamp * 1000).toLocaleString();


      data.push({
        product_name: tx.transactionHash.slice(0,20),
        amount: tx.returnValues.amount/10e17,
        event: "invested",
        pay_from: "USDT",
        //start_date: date.slice(0, date.indexOf(',')),
        start_date: timestamp,
      });
      
    }

    //sort transactions data on the basis of timestamp
    data.sort((a,b)=>{
      return b.start_date - a.start_date;
    });

  

    for (let i = 0 ; i < data.length; i++){
      let date = new Date(data[i].start_date * 1000).toLocaleString();
      data[i].start_date = date;
    }

    setTrxData(data.slice(0,5));
   


  }


  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Default" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update">
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
                      <CountUp end={claimableStakes} /> USDT
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
                      <CountUp end={runningFunds} /> USDT
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
                      <CountUp end={airDroppedTokens} /> PVGN
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
                      <CountUp end={0} />
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
                          {timeTillNextClaim}
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
                          {timeTillEnd}
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
                          {"PVGN Token Price"}
                          <span className="badge pill-badge-primary ms-3">
                            
                          </span>
                        </p>
                        <h4 className="f-w-500 mb-0 f-26">
                          
                          <span className="counter">
                          {"0.0238 $"}
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
                        {trxData.map((data, index) => (
                          <tr key={index}>
                            <td>
                              <img
                                className="img-fluid img-40 rounded-circle mb-3"
                                src={require("../../assets/images/appointment/app-ent.jpg")}
                                alt=""
                              />
                              <div className={"status-circle bg-primary"}></div>
                            </td>
                            <td className="img-content-box">
                              <span className="d-block">{data.product_name}</span>
                              <span className="font-roboto">{data.start_date}</span>
                            </td>
                            <td className="m-0 font-primary">
                              <span className="d-block">{data.amount}</span>
                              <span className="font-roboto">{data.event}</span>
                            </td>
                            {/* Add more <td> elements as needed */}
                            <td className="text-end">
                              <div className="button btn btn-primary">
                                {Done}
                                <i className="fa fa-check-circle ms-2"></i>
                              </div>
                            </td>
                          </tr>
                        ))}
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
