import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import useWindowDimensions from '@/lib/useWindowDimensions';
import { CustomButton } from '@/lib/customButton';

import { Box } from '@/components/primitives/box';
import { Text } from '@/components/primitives/text';
import GasBoiiisSVG from '@/components/gasBoiiisSVG';
import Mint from '@/components/mint';
import TokenId from '@/components/tokenId';
import DynamicL from '@/components/dynamicL';

export default async function Home() {
  const contract = process.env.NEXT_PUBLIC_TARGET_CONTRACT_ADDRESS;

  const tokenId: any = TokenId();

  // get user address
  const { data: accountData } = useAccount();

  const [randomAddress, setRandomAddress] = useState(
    // `0x429f42fb5247e3a34d88d978b7491d4b2bee6105`,
    `0xffffffffffffffffffffffffffffffffffffffff`,
  );

  const [seed, setSeed] = useState(0);

  const _seed = tokenId ? tokenId : seed;

  useEffect(() => {
    const addressPrefix = `0x`;
    const genRanHex = [...Array(40)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join(``);
    setRandomAddress(addressPrefix.concat(genRanHex) as any);
    // generate seed that looks like a tokenId
    setSeed(Math.floor(Math.random() * (9999 - 0 + 1) + 0));
  }, []);

  const address = accountData ? accountData.address : randomAddress;

  const { width, height } = useWindowDimensions();

  const _xy = width <= 700 ? width / 1.1 : 600;

  console.log(`height is `, height);
  console.log(`width is `, width);

  // parse random eth address into color hex codes
  const address2colors = address ? address.replace(`0x`, `ff`) : randomAddress;
  const colors = address2colors.match(/.{1,6}/g);
  const mapdColors =
    colors &&
    colors.map((color: any, index: any) => (
      <Box key={index}>
        <Text as="small">
          <em>#{index + 1}</em>
        </Text>
        <br />
        <Text
          as="small"
          css={{
            color: `#${color}`,
          }}
        >
          #{color}
        </Text>
      </Box>
    ));

  return (
    address && (
      // <Box>
      <>
        <Box Padded={`1`}>
          <GasBoiiisSVG address={address} seed={_seed} xy={_xy - 10} />
        </Box>
        <Box>
          <Box
            css={{
              width: _xy,
              height: _xy,
            }}
          >
            {accountData && (
              <Box
                css={{
                  width: `fit-content`,
                  height: `fit-content`,
                }}
              >
                {/* <Mint /> */}
              </Box>
            )}

            <DynamicL>{/* {mapdColors} */}</DynamicL>

            {/* <Box
              css={{
                justifyContent: `flex-end`,
                alignContent: `space-between`,
                width: `100%`,
              }}
            >
              {colors &&
                colors.map((color: any, index: any) => (
                  <Box
                    Outlined={'white1'}
                    Padded={'1'}
                    Heighted={'1'}
                    Widthed={'1'}
                    key={index}
                    // css={{
                    //   padding: `1px`,
                    //   width: `42px`,
                    //   border: `2px solid var(--rk-colors-connectButtonBackground)`,
                    //   // flexBasis: `15%`,
                    // }}
                  >
                    <Text as="small">
                      <em>#{index + 1}</em>
                    </Text>
                    <br />
                    <Text
                      as="small"
                      css={{
                        color: `#${color}`,
                      }}
                    >
                      #{color}
                    </Text>
                  </Box>
                ))}
              <Box
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
                // css={{
                //   // padding: `8px`,
                //   // borderRadius: `12px`,
                //   border: `2px solid var(--rk-colors-connectButtonBackground)`,
                //   // boxShadow: `var(--rk-shadows-connectButton)`,
                //   flexBasis: `15%`,
                // }}
              >
                <Text as="small">
                  <em>Seed</em>
                </Text>
                <br />
                <Text as="small">{_seed}</Text>
              </Box>
              <Box
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
              >
                <Text as="small">
                  <em>Grow</em>
                </Text>
                <br />
                <Text as="small">{_seed}</Text>
              </Box>
            </Box> */}

            {/* <Box>
              <Text as="small">
                <a
                  href={`${process.env.NEXT_PUBLIC_ETHERSCAN_URL}address/${contract}`}
                >
                  etherscan
                </a>
                {` | `}
                <a href={`${process.env.NEXT_PUBLIC_QUIXOTIC_URL}${contract}`}>
                  quixotic
                </a>
                {` | `}
                <a href="https://github.com/iammatthias/eeethers">github</a>
              </Text>
            </Box> */}
          </Box>
        </Box>
        {/* </Box> */}
      </>
    )
  );
}
