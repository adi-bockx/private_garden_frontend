import React from "react";
import { Button } from "reactstrap";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { ethers } from 'ethers';

const PoolBuyButton = ({ poolInvestment, poolType, minimum }) => {
  //const GardenTier = { Rookie: 0, Master: 1, Pro: 2 };
  //   Pool Stake Function
  const { config } = usePrepareContractWrite({
    address: "0xcf1d455E3eeB9a6563495413DA29788836295A37",
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
          },
          {
            "internalType": "address",
            "name": "_referrer",
            "type": "address"
          }
      ],
      "name": "invest",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    ],
    args: [poolType ,ethers.utils.parseUnits(poolInvestment.toString(), 18), "0x0000000000000000000000000000000000000000"],
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
        disabled={!write || poolInvestment < minimum}
        onClick={() => write?.()}
      >
        Buy Plan
      </Button>
      {isLoading && <div>Check Wallet...</div>}
      {isSuccess && poolType === 0 && <div>Rookie Plan Transaction: {JSON.stringify(data)}</div>}
      {isSuccess && poolType === 1 && <div>Master Plan Transaction: {JSON.stringify(data)}</div>}
      {isSuccess && poolType === 2 && <div>Pro Plan Transaction: {JSON.stringify(data)}</div>}
    </>
  );
};

export default PoolBuyButton; 
