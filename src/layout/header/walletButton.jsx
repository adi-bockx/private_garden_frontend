import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
export function WalletButton() {
  const { address } = useAccount()
  const { connect} = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (address) {
    let add = address.slice(0,10) + "...";
    console.log(add);
    return (
      <div> 
        <button className='btn btn-primary btn-lg'
            color="primary"
            size="lg" 
            onClick={() => disconnect()}>{add}
        </button> 
      </div>
    )
      
  }
  return (
    <div >
      <button className='btn btn-primary btn-lg'
        color="primary"
        size="lg" 
        onClick={() => connect()}>Connect Wallet
      </button>
    </div>
  )
}
