"use client";

import { useWalletLogin, useWalletLogout } from "@lens-protocol/react-web";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { WhenLoggedInWithProfile } from "./WhenLoggedInWithProfile";
import { WhenLoggedOut } from "./WhenLoggedOut";

export function LoginButton({ handle }: { handle?: string }) {
  const {
    execute: login,
    error: loginError,
    isPending: isLoginPending,
  } = useWalletLogin();
  const { execute: logout, isPending: isLogoutPending } = useWalletLogout();
  const toast = useToast();
  const { address, isConnected, isDisconnected } = useAccount();

  useEffect(() => {
    const connectLens = async () => {
      if (address && isConnected) {
        await login({
          address: address?.toLowerCase(),
          handle,
        });
      }
    };

    connectLens();
  }, [address, isConnected]);

  useEffect(() => {
    if (isDisconnected) {
      logout();
    }
  }, [isDisconnected]);

  if (loginError)
    toast({
      title: "Error loggin in",
      description: loginError.message,
      status: "error",
      duration: 5000,
      isClosable: true,
    });

  return (
    <>
      <WhenLoggedInWithProfile>
        <ConnectButton label="Log out" />
      </WhenLoggedInWithProfile>

      <WhenLoggedOut>
        <ConnectButton label="Log in" />
      </WhenLoggedOut>
    </>
  );
}
