import React from 'react';
import { Home, Anchor, Headphones ,RefreshCcw } from 'react-feather';
import product1 from '../assets/images/ecommerce/product-table-1.png';
import product2 from '../assets/images/ecommerce/product-table-2.png';
import product3 from '../assets/images/ecommerce/product-table-3.png';
import product4 from '../assets/images/ecommerce/product-table-4.png';
import product5 from '../assets/images/ecommerce/product-table-5.png';
import product6 from '../assets/images/ecommerce/product-table-1.png';

export const productData = [
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
export const productColumns = [
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