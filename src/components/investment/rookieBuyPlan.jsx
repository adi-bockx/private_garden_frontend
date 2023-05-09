import React from "react";
import { Button } from "reactstrap";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

const RookieBuyButton = ({ rookie }) => {
  //   Rookie Stake Function
  const { config } = usePrepareContractWrite({
    address: "0x59adB7e154a5D9A777770C6c142D8Ea68F80E8C2",
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenAmountToStake",
            type: "uint256",
          },
        ],
        name: "rookieStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    args: [100000000],
    functionName: "rookieStake",
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <>
      <Button
        color="primary"
        size="lg"
        disabled={!write || rookie < 50}
        onClick={() => write?.()}
      >
        Buy Plan
      </Button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Rookie Plan Transaction: {JSON.stringify(data)}</div>}
    </>
  );
};

export default RookieBuyButton;
