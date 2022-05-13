import { Box } from './primitives/box';

export default function Layout({ children }: any) {
  return (
    <Box
      css={{
        position: `relative`,
        height: `100vh`,
        margin: `auto 0`,
        padding: `0`,
        gridGap: `2rem`,
        '@bp1': {
          gridTemplateColumns: `1fr 1fr`,
        },
      }}
    >
      {children}
    </Box>
  );
}
