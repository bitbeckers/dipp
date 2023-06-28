import { LensConfig, development } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";

const config: LensConfig = {
  bindings: wagmiBindings(),
  environment: development,
};

export { config };
