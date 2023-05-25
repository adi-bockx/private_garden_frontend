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

import { useAccount } from 'wagmi'
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
const HYIPABI = require('../../data/hyipAbi.json');
const Web3 = require('web3');
// const web3 = new Web3(process.env.REACT_APP_API_URL);
// const contract = new web3.eth.Contract(HYIPABI, process.env.REACT_APP_HYIP);
const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/z45v7nxJqTwkqQLStytSHCLG5w3pCCok');
const contract = new web3.eth.Contract(HYIPABI, "0xcf1d455E3eeB9a6563495413DA29788836295A37");

const TransactionHistory = () => {
  const GardenTier = { Rookie: 0, Master: 1, Pro: 2 };
  const { address, isConnecting, isDisconnected } = useAccount();
  const [orders, setOrders] = useState([]);
  const [claimableStakes, setClaimableStake] = useState(0);
  const [referralReward, setReferralReward] = useState(0);
  useEffect(() => {
    queryInvestment();
  }, []);

  async function queryInvestment() {
    let results = [];
    if(address){
      console.log("address", address);
       //pool investments
    try {
      // Call the mapping using the address and gardenTier as inputs
      let result = await contract.methods.investments(address, GardenTier.Rookie).call();
      results.push({
        name: "Rookie Garden",
        price: result.amount > 0? result.amount/10e17: 0,
        status: result.amount > 0? "Active": "Inactive"
      });
      result = await contract.methods.investments(address, GardenTier.Master).call();
      results.push({
        name: "Master Garden",
        price: result.amount > 0? result.amount/10e17: 0,
        status: result.amount > 0? "Active": "Inactive"
      });
      result = await contract.methods.investments(address, GardenTier.Pro).call();
      results.push({
        name: "Pro Garden",
        price: result.amount > 0? result.amount/10e17: 0,
        status: result.amount > 0? "Active": "Inactive"
      });
      // let result = await contract.methods.investments(address, GardenTier.Rookie).call();
      // results.push(result);
      // result = await contract.methods.investments(address, GardenTier.Master).call();
      // results.push(result);
      // result = await contract.methods.investments(address, GardenTier.Pro).call();
      // results.push(result);

      console.log(results);
      setOrders(results);
    } catch (error) {
      console.error("error1",error);
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
      let result = await contract.methods.referrerRewards(address).call();  
      setReferralReward(result);
      
    } catch (error) {
      console.error("error" ,error);
    }
  
    }
    else {
      console.log("No address found");
    }
    
  }

  return (
    <Fragment>
      <Breadcrumb parent="ECommerce" title="Pools" />
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
                              <CountUp end={claimableStakes} />
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
                              <CountUp end={referralReward} />
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
              <>
                {orders.map((product, index) => (
                  <Col key={index} xl="4" md="6">
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
                              <a href="#javascript">{product.name}</a>
                            </h6>
                          </div>
                          <div className="price d-flex">
                            <div className="text-muted me-2">Price</div>: {product.price} USDT
                          </div>
                          {/* <div className="avaiabilty">
                            <div className="text-success">+0.40%</div>
                          </div> */}
                          <Button color="primary" size="xs">
                            {product.status}
                          </Button>
                          <X className="btn-close" />
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default TransactionHistory;
