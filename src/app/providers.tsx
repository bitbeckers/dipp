"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import { LensProvider } from "@lens-protocol/react-web";

import { chains, config as wagmiConfig } from "../config/wagmi";
import { config as lensConfig } from "../config/lens";
import { theme } from "../config/chakra";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <LensProvider config={lensConfig}>
              {mounted && children}
            </LensProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </CacheProvider>
  );
}
