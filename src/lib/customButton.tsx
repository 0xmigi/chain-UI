import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Box } from '@/components/primitives/box';
import { Text } from '@/components/primitives/text';
import { Button } from '@/components/primitives/button';
import { styled } from '@/styles/stitches.config';

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
          <Box
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: `none`,
                userSelect: `none`,
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <Box Widthed={`1`} Heighted={`3`}>
                    <Button onClick={openConnectModal} type="button">
                      Connect Wallet
                    </Button>
                  </Box>
                );
              }
              if (chain.unsupported) {
                return (
                  <Box
                    css={{
                      position: `relative`,
                      margin: `auto 0`,
                      padding: `0`,
                      display: `flex`,
                      flexDirection: `row`,
                      justifyContent: `center`,
                      alignItems: `center`,
                      alignContent: `center`,
                      flexWrap: `wrap`,
                      gridGap: `2rem`,
                      '@bp1': {
                        gridTemplateColumns: `1fr 1fr`,
                      },
                    }}
                  >
                    <Button onClick={openChainModal} type="button">
                      Wrong network
                    </Button>
                  </Box>
                );
              }
              return (
                <Box
                  css={{
                    position: `relative`,
                    margin: `auto 0`,
                    padding: `0`,
                    display: `flex`,
                    flexDirection: `row`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    alignContent: `center`,
                    flexWrap: `wrap`,
                    gridGap: `2rem`,
                    '@bp1': {
                      gridTemplateColumns: `1fr 1fr`,
                    },
                  }}
                >
                  <Button
                    onClick={openChainModal}
                    style={{ display: `flex`, alignItems: `center` }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <Box
                        css={{
                          background: chain.iconBackground,
                          position: `relative`,
                          margin: `auto 0`,
                          padding: `0`,
                          display: `flex`,
                          flexDirection: `row`,
                          justifyContent: `center`,
                          alignItems: `center`,
                          alignContent: `center`,
                          flexWrap: `wrap`,
                          gridGap: `2rem`,
                          '@bp1': {
                            gridTemplateColumns: `1fr 1fr`,
                          },
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: `hidden`,
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? `Chain icon`}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </Box>
                    )}
                    {chain.name}
                  </Button>
                  <Button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ``}
                  </Button>
                </Box>
              );
            })()}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};
