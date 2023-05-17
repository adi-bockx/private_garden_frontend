import React from "react";
import { Button } from "reactstrap";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { ethers } from 'ethers';

const RookieBuyButton = ({ rookie }) => {
  const GardenTier = { Rookie: 0, Master: 1, Pro: 2 };
  //   Rookie Stake Function
  const { config } = usePrepareContractWrite({
    address: "0x5C96B41524BCE149729C1c7C9356fB8F17eF4422",
    abi: [
      {
        "inputs": [
        {
          "internalType": "enum HYIP.GardenTier",
          "name": "_pool",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "invest",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    ],
    args: [GardenTier.Rookie ,ethers.utils.parseUnits(rookie.toString(), 18)],
    functionName: "invest",
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
      <Button
        color="primary"
        size="lg"
        disabled={!write || rookie < 50}
        onClick={() => write?.()}
      >
        Buy Plan
      </Button>
      {isLoading && <div>Check Wallet...</div>}
      {isSuccess && <div>Rookie Plan Transaction: {JSON.stringify(data)}</div>}
    </>
  );
};

export default RookieBuyButton;
