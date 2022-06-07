import '@rainbow-me/rainbowkit/styles.css';

import {
  apiProvider,
  configureChains,
  RainbowKitProvider,
  getDefaultWallets,
  lightTheme,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { createClient, chain, WagmiProvider } from 'wagmi';

export default function VibeProvider({ children }: any) {
  const infuraid = process.env.NEXT_PUBLIC_INFURA;
  const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY;

  const { provider, chains } = configureChains(
    [chain.rinkeby, chain.optimism, chain.optimismKovan, chain.mainnet],
    [
      apiProvider.alchemy(alchemyId),
      apiProvider.infura(infuraid),
      apiProvider.fallback(),
    ],
  );

  const { connectors } = getDefaultWallets({
    appName: `my rainboii`,
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: false,
    connectors,
    provider,
  });

  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider
        coolMode
        chains={chains}
        theme={{
          lightMode: lightTheme({
            accentColor: `#ff0000`,
            accentColorForeground: `white`,
            borderRadius: `large`,
            fontStack: `system`,
          }),
          darkMode: darkTheme({
            accentColor: `#7b3fe4`,
            accentColorForeground: `white`,
            borderRadius: `large`,
            fontStack: `system`,
          }),
        }}
      >
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
