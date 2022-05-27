import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Box } from '@/components/primitives/box';
import { Text } from '@/components/primitives/text';
import { Button } from '@/components/primitives/button';
import { styled } from '@/styles/stitches.config';
import { IconButton } from '@/components/iconButton';

export const CustomButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <Box {...(!mounted && {})}>
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <IconButton onClick={openConnectModal}>
                    <Box
                      Color={`heavy`}
                      Rounded={`2`}
                      Padded={`2`}
                      Heighted={`1`}
                      Widthed={`2`}
                    >
                      Connect Wallet
                    </Box>
                  </IconButton>
                );
              }
              if (chain.unsupported) {
                return (
                  <IconButton onClick={openChainModal}>
                    <Box
                      Color={`heavy`}
                      Rounded={`2`}
                      Padded={`2`}
                      Heighted={`0`}
                      Widthed={`2`}
                    >
                      Wrong network
                    </Box>
                  </IconButton>
                );
              }
              return (
                <Box Positioned={`column`}>
                  <IconButton onClick={openChainModal}>
                    <Box
                      Color={`heavy`}
                      Rounded={`2`}
                      Padded={`2`}
                      Heighted={`0`}
                      Widthed={`2`}
                    >
                      {chain.hasIcon && (
                        <Box Padded={`2`}>
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? `Chain icon`}
                              src={chain.iconUrl}
                              style={{ width: 16, height: 16 }}
                            />
                          )}
                        </Box>
                      )}
                      {chain.name}
                    </Box>
                  </IconButton>
                  <IconButton onClick={openAccountModal}>
                    <Box
                      Color={`heavy`}
                      Rounded={`2`}
                      Padded={`2`}
                      Heighted={`0`}
                      Widthed={`2`}
                    >
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ``}
                    </Box>
                  </IconButton>
                </Box>
              );
            })()}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};
