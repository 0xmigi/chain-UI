import { Box } from './primitives/box';
import { Text } from './primitives/text';
import { ThemeButton } from './actions/theme';
import { CustomButton } from '@/lib/customButton';
import { Piee } from '@/components/primitives/pie';
import { Constants } from './primitives/constants';

export default function DynamicL({ children, contents, colors }: any) {
  const content = colors.map((color: any, index: any) => {
    return (
      <Text
        as="small"
        css={{
          color: `#${color}`,
        }}
      >
        {contents[index] % 3}
      </Text>
    );
  });
  // const v = colors.map((color: any, index: any) => {
  //   return (
  //     (contents[index] % 3)
  //   )
  // });
  const v = [0, 2, 1, 1, 1, 0, 1];
  const w = [2, 1, 2, 0, 0, 0, 1];

  const collection = [
    {
      Positioned: `column`,
      Color: `light`,
      Rounded: v[0],
      Padded: `0`,
      Heighted: v[0],
      Widthed: w[0],
      Clickable: `yes1`,
      contents: content,
      remainder: 0,
    },
    {
      Positioned: `column`,
      Color: `heavy`,
      Rounded: v[1],
      Padded: `2`,
      Heighted: v[1],
      Widthed: w[1],
      Clickable: `no`,
      contents: content,
      remainder: 1,
    },
    {
      Positioned: `column`,
      Color: `light`,
      Rounded: v[2],
      Padded: `2`,
      Heighted: v[2],
      Widthed: w[2],
      Clickable: `no`,
      contents: content,
      remainder: 2,
    },
    {
      Positioned: `column`,
      Color: `heavy`,
      Rounded: v[3],
      Padded: `2`,
      Heighted: v[3],
      Widthed: w[3],
      Clickable: `no`,
      contents: content,
      remainder: 3,
    },
    {
      Positioned: `column`,
      Color: `heavy`,
      Rounded: v[4],
      Padded: `2`,
      Heighted: v[4],
      Widthed: w[4],
      Clickable: `no`,
      contents: content,
      remainder: 5,
    },
    {
      Positioned: `column`,
      Color: `heavy`,
      Rounded: v[5],
      Padded: `2`,
      Heighted: v[5],
      Widthed: w[5],
      Clickable: `no`,
      contents: content,
      remainder: 2,
    },
    {
      Positioned: `column`,
      Color: `heavy`,
      Rounded: v[6],
      Padded: `2`,
      Heighted: v[6],
      Widthed: w[6],
      Clickable: `no`,
      contents: content,
      remainder: 1,
    },
    // {
    //   "Positioned": `row`,
    //   "Color": `heavy`,
    //   "Rounded": v[6],
    //   "Padded": `2`,
    //   "Heighted": v[0],
    //   "Widthed": v[0],
    //   "Clickable": `no`,
    //   "contents": content,
    //   "remainder": 5,
    // },
  ];

  const Squares = collection.map((item: any) => {
    const ABlock = () => {
      return item.Heighted === 0 ? (
        // stacked 2 levels
        Math.floor(Math.random() * 3) === 0 ? (
          <Box
            Color={item.Color}
            Rounded={item.Rounded}
            Padded={item.Padded}
            Heighted={item.Heighted}
            Widthed={item.Widthed}
          >
            a1
          </Box>
        ) : Math.floor(Math.random() * 2) === 0 ? (
          <Box
            Color={item.Color}
            Rounded={item.Rounded}
            Padded={item.Padded}
            Heighted={`1`}
            Widthed={item.Widthed}
          >
            a2
          </Box>
        ) : (
          <Box
            Color={item.Color}
            Rounded={item.Rounded}
            Padded={item.Padded}
            Heighted={`2`}
            Widthed={item.Widthed}
          >
            a3
          </Box>
        )
      ) : null;
    };
    const BBlock = () => {
      return item.Heighted === 1 ? (
        // stacked 1 level
        Math.floor(Math.random() * 2) === 0 ? (
          <Box
            Color={item.Color}
            Rounded={item.Rounded}
            Padded={item.Padded}
            Heighted={`0`}
            Widthed={item.Widthed}
          >
            b1
          </Box>
        ) : Math.floor(Math.random() * 2) === 0 ? (
          <Box
            Color={item.Color}
            Rounded={item.Rounded}
            Padded={item.Padded}
            Heighted={item.Heighted}
            Widthed={item.Widthed}
          >
            b2
          </Box>
        ) : (
          <Box
            Color={item.Color}
            Rounded={item.Rounded}
            Padded={item.Padded}
            Heighted={`2`}
            Widthed={item.Widthed}
          >
            b3
          </Box>
        )
      ) : (
        <ABlock />
      );
    };
    return (
      <Box Positioned={item.Positioned} {...children}>
        <Box
          Color={item.Color}
          Rounded={item.Rounded}
          Padded={item.Padded}
          Heighted={item.Heighted}
          Widthed={item.Widthed}
        >
          {item.contents}
        </Box>
        {item.Heighted === 2 ? (
          // not stacked
          // null
          Math.floor(Math.random() * 4) === 0 ? null : Math.floor(
              Math.random() * 3,
            ) === 0 ? (
            <Box
              Color={item.Color}
              Rounded={item.Rounded}
              Padded={item.Padded}
              Heighted={`0`}
              Widthed={item.Widthed}
            >
              c1
            </Box>
          ) : Math.floor(Math.random() * 2) === 0 ? (
            <Box
              Color={item.Color}
              Rounded={item.Rounded}
              Padded={item.Padded}
              Heighted={`1`}
              Widthed={item.Widthed}
            >
              c2
            </Box>
          ) : (
            <Box
              Color={item.Color}
              Rounded={item.Rounded}
              Padded={item.Padded}
              Heighted={item.Heighted}
              Widthed={item.Widthed}
            >
              c3
            </Box>
          )
        ) : item.Heighted === 1 ? (
          // stacked 1 level
          <BBlock />
        ) : (
          <ABlock />
        )}
      </Box>
    );
  });
  return (
    <Box Positioned={`center`}>
      <Box Aligned={`start`}>
        {Squares}
        <Box
          Color={`heavy`}
          Rounded={`2`}
          Padded={`1`}
          Heighted={`2`}
          Widthed={`2`}
        >
          <Piee data={Constants.data} />
        </Box>

        {/* <Box
          Color={`heavy`}
          Rounded={`2`}
          Padded={`1`}
          Heighted={`2`}
          Widthed={`2`}
        >
          text
        </Box> */}
        <Box Positioned={`column`}>
          <CustomButton />
          <ThemeButton />
        </Box>
      </Box>
    </Box>
  );
}

// surface area of 360000 px

// / 3 = 120000 px

// small1 9 x 9 = 40000 px

// medium2 2 + 1 small1 = 40000 px

// large3 1 = 40000 px

// 3 large3 = 120000 px

// 4 medium2 = 120000 px

// 18 small1 = 120000 px
