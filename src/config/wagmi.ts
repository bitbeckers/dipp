import { configureChains, createConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

const walletConnectProjectId = "f71b076d874fb5dc1367b6a6a703a40d";

const { publicClient, chains } = configureChains(
  [polygonMumbai, polygon],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "D I P P",
  chains,
  projectId: walletConnectProjectId,
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors,
});

export { config, chains };
