import React from "react";
import Routers from "./route";
import { Provider } from "react-redux";
import store from "./store";
import { Auth0Provider } from "@auth0/auth0-react";
import { auth0 } from "./data/config";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { mainnet, goerli } from "wagmi/chains";

import { Web3Button } from "@web3modal/react";

import { useWeb3ModalTheme } from "@web3modal/react";

const App = () => {
  const { theme } = useWeb3ModalTheme({ themeColor: "green" });

  const chains = [goerli];

  // Wagmi client
  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: "0362f8d274dc11c77f6862bd8f264390" }),
  ]);
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: "Private Garden", chains }),
    provider,
  });

  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);
  return (
    <div className="App">
      <Auth0Provider
        domain={auth0.domain}
        clientId={auth0.clientId}
        redirectUri={auth0.redirectUri}
      >
        <WagmiConfig client={wagmiClient}>
          <Provider store={store}>
            <Routers />
          </Provider>
        </WagmiConfig>
      </Auth0Provider>
    </div>
  );
};

export default App;
