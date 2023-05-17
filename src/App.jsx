import React from 'react';
import Routers from './route';
import { Provider } from 'react-redux';
import store from './store'
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0 } from './data/config';
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { polygonMumbai } from 'wagmi/chains';

const { provider } = configureChains(
  [polygonMumbai],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: process.env.REACT_APP_API_URL 
      }),
    })
  ]
);

const client = createClient({
  autoConnect: false,
  provider,
});

const App = () => (
  <div className="App">
    <WagmiConfig client={client}>
      <Auth0Provider domain={auth0.domain} clientId={auth0.clientId} redirectUri={auth0.redirectUri}>
        <Provider store={store}>
          <Routers />
        </Provider>
      </Auth0Provider>
    </WagmiConfig>
  </div>
);

export default App;
