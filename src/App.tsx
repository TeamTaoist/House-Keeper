import "./App.css";
import Router from "./router";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: "7EfveD9qe2JYumi9OIJJYzmDrELjvFRl" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "House Keeper",
  projectId: "9ae1de7d5c0b0cc4123c7b1c4088dbf7",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Router />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
