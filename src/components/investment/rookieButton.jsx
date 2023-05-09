import React from "react";
import { Button } from "reactstrap";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import RookieBuyButton from "./rookieBuyPlan";

const RookieButton = ({ rookie }) => {
  // Rookie Stake Function
  //   const { config } = usePrepareContractWrite({
  //     address: "0x59adB7e154a5D9A777770C6c142D8Ea68F80E8C2",
  //     abi: [
  //         {
  //           inputs: [
  //             {
  //               internalType: "uint256",
  //               name: "tokenAmountToStake",
  //               type: "uint256",
  //             },
  //           ],
  //           name: "rookieStake",
  //           outputs: [],
  //           stateMutability: "nonpayable",
  //           type: "function",
  //         },
  //       ],
  //     args: [100000000],
  //     functionName: "rookieStake",
  //   });

  //   const { data, isLoading, isSuccess, write } = useContractWrite(config);

  // USDT Allaonce Function

  const { config } = usePrepareContractWrite({
    address: "0x91d39dA716A903F700778aC9487e160D9463bdE0",
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
    args: ["0x59adB7e154a5D9A777770C6c142D8Ea68F80E8C2", rookie * 1e6],
    functionName: "approve",
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <>
      <RookieBuyButton rookie={rookie} />
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
        <div>USDT Alloance Transaction: {JSON.stringify(data)}</div>
      )}
    </>
  );
};

export default RookieButton;
