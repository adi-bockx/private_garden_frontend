import React from "react";
import { Button } from "reactstrap";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import RookieBuyButton from "./rookieBuyPlan";
import { ethers } from 'ethers';



const RookieButton = ({ rookie }) => {
  const { config } = usePrepareContractWrite({
    address: "0x8B7760e6cC84A4F7eE863370C3Ca0862c2c63EF7",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    args: ["0x5C96B41524BCE149729C1c7C9356fB8F17eF4422", ethers.utils.parseUnits(rookie.toString(), 18)],
    functionName: "approve",
  });
  const { data, isLoading, isSuccess, write } = useContractWrite({...config, 
    onError(error) {
      console.log('Error', error)
    }});

  console.log("write new", write);
  console.log("sucess", isSuccess);
  console.log("data", data);

  return (
    <>
      
      {isSuccess ? (
        ""
      ) : (
        <Button
          color="primary"
          size="lg"
          disabled={!write || rookie < 50}
          onClick={() => write?.()}
        >
          Approve USDT
        </Button>
      )}
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && (
        <div>
          {/* <div>USDT Allowance Transaction: {JSON.stringify(data)}</div> */}
          <RookieBuyButton rookie={rookie} />
        </div>
       
      )}
    </>
  );
};

export default RookieButton;
