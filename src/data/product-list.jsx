import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi'
import DataTable from "react-data-table-component";
const USDTABI = require('./erc20Abi.json');
const HYIPABI = require('./hyipAbi.json');
const Web3 = require('web3');
const web3 = new Web3(process.env.REACT_APP_API_URL);
const spender = process.env.REACT_APP_HYIP;
const USDT = new web3.eth.Contract(USDTABI, process.env.REACT_APP_USDT);
const HYIP = new web3.eth.Contract(HYIPABI, process.env.REACT_APP_HYIP);
let data = [];
const productColumns = [
  {

    name: "Tx Hash",
    selector: row => row.product_name,
    sortable: true,
    center: true,
  },
  {
    name: "Amount",
    selector: row => row.amount,
    sortable: true,
    center: true,
  },
  {
    name: "TYPE",
    selector: row => row.stock,
    sortable: true,
    center: true,
  },
  {
    name: "PAY FROM",
    selector: row => row.pay_from,
    sortable: true,
    center: true,
  },
  ,
  {
    name: "DATE",
    selector: row => row.start_date,
    sortable: true,
    center: true,
  },
  {
    name: "ACTION",
    selector: row => row.action,
    sortable: true,
    center: true,
  },
];

const productData = [
  {
    product_name: "AD",
    amount: "ADI",
    stock: <div className='font-success'>Invested</div>,
    pay_from: "Pay with USDT",
    start_date: "Date",
    action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div>
  },
  {
    product_name: "AD",
    amount: "ADI",
    stock: <div className='font-success'>Invested</div>,
    pay_from: "Pay with USDT",
    start_date: "Date",
    action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div>
  }
]


export const TransactionsList = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  //const [txData, setTxData] = useState();

  const [ trxData, setTrxData ] = useState([]);

  useEffect(() => {
     getTransactionHistory();
  },[]);
  
  
  async function getTransactionHistory() {
    

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

      let obj = {
        product_name: tx.transactionHash.slice(0,12),
        amount: tx.returnValues.value/10e18,
        stock: <div className='font-success'>Approve</div>,
        pay_from: "Pay with USDT",
        start_date: date.slice(0, date.indexOf(',')),
        action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
          <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
        </div>
      }
      data.push(obj);
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
        product_name: tx.transactionHash.slice(0,12),
        amount: tx.returnValues.amount/10e18,
        stock: <div className='font-success'>Invested</div>,
        pay_from: "Pay with USDT",
        start_date: date.slice(0, date.indexOf(',')),
        action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
          <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
        </div>
      });
      
    }
    // console.log("data",data); 
    setTrxData(data);
  }

  return(
    <DataTable columns={productColumns} data={trxData}/>
    // <div>{txData[0].product_name}</div>
  );

}



// export const productColumns = [
//   {

//     name: "Tx Hash",
//     selector: row => row.product_name,
//     sortable: true,
//     center: true,
//   },
//   {
//     name: "Amount",
//     selector: row => row.amount,
//     sortable: true,
//     center: true,
//   },
//   {
//     name: "TYPE",
//     selector: row => row.stock,
//     sortable: true,
//     center: true,
//   },
//   {
//     name: "PAY FROM",
//     selector: row => row.pay_from,
//     sortable: true,
//     center: true,
//   },
//   ,
//   {
//     name: "DATE",
//     selector: row => row.start_date,
//     sortable: true,
//     center: true,
//   },
//   {
//     name: "ACTION",
//     selector: row => row.action,
//     sortable: true,
//     center: true,
//   },
// ];
// ]
export const referralsData = [
  {
    user: "US000157",
    wallet: "0xaft*********************i9up",
    amount: "$1110",
    profit: <div className='font-success'>$85</div>,
    team: "25",
    start_date: "2022/4/19",
    action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div>

  },
  {
    
    user: "US000157",
    wallet: "0xaft*********************i9up",
    amount: "$1110",
    profit: <div className='font-danger'>$100</div>,
    team: "25",
    start_date: "2022/4/19",
    action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div>
  },
  {
    
    user: "US000157",
    wallet: "0xaft*********************i9up",
    amount: "$1110",
    profit: <div className='font-danger'>$100</div>,
    team: "25",
    start_date: "2022/4/19",
    action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div>
  },
  {
    
    user: "US000157",
    wallet: "0xaft*********************i9up",
    amount: "$1120",
    profit: <div className='font-primary'>$150</div>,
    team: "25",
    start_date: "2022/4/19",
    action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div>
  },
  {
    
    user: "US000157",
    wallet: "0xaft*********************i9up",
    amount: "$1130",
    profit: <div className='font-success'>$85</div>,
    team: "25",
    start_date: "2022/4/19",
    action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div>
  }
]
export const referralsColumns = [
  {

    name: "User ID",
    selector: row => row.user,
    sortable: true,
    center: true,
  },
  {
    name: "Wallet",
    selector: row => row.wallet,
    sortable: true,
    center: true,
  },
  {
    name: "Investment Amount",
    selector: row => row.amount,
    sortable: true,
    center: true,
  },
  {
    name: "Total Profit",
    selector: row => row.profit,
    sortable: true,
    center: true,
  },
  {
    name: "Team",
    selector: row => row.team,
    sortable: true,
    center: true,
  },
];

export const usersList = [
  // {
  //   user_name: "TNX000157",
  //   user_email: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
  //   user_wallet: "$1110",
  //   status: <div className='font-success'>$85</div>,
  //   start_date: "2022/4/19",
  //   action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
  //     <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
  //   </div>

  // },
  {
    
    product_name: "TNX000157",
    product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
    amount: "$10",
    stock: <div className='font-danger'>Withdraw</div>,
    pay_from: "Pay with BNB",
    start_date: "2022/4/19",
    action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div>
  },
  {
    
    product_name: "TNX000157",
    product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
    amount: "$10",
    stock: <div className='font-danger'>Withdraw</div>,
    pay_from: "Pay with BNB",
    start_date: "2022/4/19",
    action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div>
  },
  {
    
    product_name: "TNX000157",
    product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
    amount: "$20",
    stock: <div className='font-primary'>Reward</div>,
    pay_from: "Pay with BNB",
    start_date: "2022/4/19",
    action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div>
  },
  {
    
    product_name: "TNX000157",
    product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
    amount: "$30",
    stock: <div className='font-success'>Deposit</div>,
    pay_from: "Pay with BNB",
    start_date: "2022/4/19",
    action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div>
  },
  {
    
    product_name: "TNX000157",
    product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
    amount: "$10",
    stock: <div className='font-success'>Deposit</div>,
    pay_from: "Pay with BNB",
    start_date: "2022/4/19",
    action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div>
  },
  {
    
    product_name: "TNX000157",
    product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
    amount: "$10",
    stock: <div className='font-success'>Deposit</div>,
    pay_from: "Pay with BNB",
    start_date: "2022/4/19",
    action: <div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div>
  }
]
export const usersColumns = [
  {

    name: "TRANX ID",
    selector: row => row.product_name,
    sortable: true,
    center: true,
  },
  {
    name: "Amount",
    selector: row => row.amount,
    sortable: true,
    center: true,
  },
  {
    name: "TYPE",
    selector: row => row.stock,
    sortable: true,
    center: true,
  },
  {
    name: "PAY FROM",
    selector: row => row.pay_from,
    sortable: true,
    center: true,
  },
  ,
  {
    name: "DATE",
    selector: row => row.start_date,
    sortable: true,
    center: true,
  },
  {
    name: "ACTION",
    selector: row => row.action,
    sortable: true,
    center: true,
  },
];