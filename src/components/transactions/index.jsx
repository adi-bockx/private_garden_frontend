import React, { Fragment, useEffect, useState  } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import DataTable from "react-data-table-component";
import CountUp from "react-countup";

import { productColumns } from "../../data/product-list";
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
import { useAccount } from 'wagmi'
const USDTABI = require('../../data/erc20Abi.json');
const HYIPABI = require('../../data/hyipAbi.json');
const Web3 = require('web3');
const web3 = new Web3("https://polygon-mumbai.g.alchemy.com/v2/z45v7nxJqTwkqQLStytSHCLG5w3pCCok");
const spender = "0xcf1d455E3eeB9a6563495413DA29788836295A37";
const USDT = new web3.eth.Contract(USDTABI, "0x8B7760e6cC84A4F7eE863370C3Ca0862c2c63EF7");
const HYIP = new web3.eth.Contract(HYIPABI, "0xcf1d455E3eeB9a6563495413DA29788836295A37");
let data = [];

const TransactionHistory = () => {
  const GardenTier = { Rookie: 0, Master: 1, Pro: 2 };
  const { address, isConnecting, isDisconnected } = useAccount();
  //const [txData, setTxData] = useState();

  const [ trxData, setTrxData ] = useState([]);
  const [approvalSum, setApprovalSum] = useState(0);
  const [remainingAllowance, setRemainingAllowance] = useState(0);
  const [fundsRunning, setRunningFunds] = useState(0);

  useEffect(() => {
     data = [];
     setTrxData([]);
     getTransactionHistory();
  },[]);
  
  
  async function getTransactionHistory() {
    let totalApproval = 0;
    //approval of usdt
    const transactions1 = await USDT.getPastEvents('Approval', {
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
        stock: <div className='font-success'>Approve</div>,
        pay_from: "USDT",
        // start_date: date.slice(0, date.indexOf(',')),
        start_date: timestamp,
        action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
          <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
        </div>
      });
      totalApproval+=tx.returnValues.value/10e17;
    }
      //return data;
    }

    //investment in hyip
    const transactions2 = await HYIP.getPastEvents('Invested', {
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
        stock: <div className='font-success'>Invested</div>,
        pay_from: "USDT",
        //start_date: date.slice(0, date.indexOf(',')),
        start_date: timestamp,
        action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
          <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
        </div>
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

    //get remaining allowance
    let allowance = await USDT.methods.allowance(address, spender).call();
    



    // console.log("data",data); 
    setTrxData(data);
    setApprovalSum(totalApproval);
    setRemainingAllowance(allowance);
    try {
      let sum = 0;
      // Call the mapping using the address and gardenTier as inputs
      let result = await HYIP.methods.investments(address, GardenTier.Rookie).call();
      console.log("result" ,result);
      sum += (result.amount/10e17);
      //'95000000000000000000'

      result = await HYIP.methods.investments(address, GardenTier.Master).call();
      sum += (result.amount/10e17);
      
      result = await HYIP.methods.investments(address, GardenTier.Pro).call();
      sum += (result.amount/10e17);
      //sum = sum / 10e17;
      setRunningFunds(sum);
    } catch (error) {
      console.error(error);
    }


  }

  

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
                            <CountUp end={approvalSum} />
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
                            <CountUp end={remainingAllowance} />
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
                            <CountUp end={fundsRunning} />
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
                <DataTable columns={productColumns} data={trxData}/>
                  {/* <DataTable
                    noHeader
                    columns={productColumns}
                    data={productData}
                  /> */}
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
