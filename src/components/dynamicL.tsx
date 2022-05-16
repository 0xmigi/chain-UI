import { Box } from './primitives/box';
import { Text } from './primitives/text';
import { ThemeButton } from './actions/theme';
import { CustomButton } from '@/lib/customButton';

export default function DynamicL({ children }: any) {
  return (
    <Box Positioned={`center`}>
      <Box>
        <Box
          Color={`light`}
          Rounded={`1`}
          Padded={`1`}
          Heighted={`3`}
          Widthed={`3`}
          Clickable={`yes1`}
        >
          {children}
        </Box>
        <Box
          Color={`light`}
          Rounded={`3`}
          Padded={`1`}
          Heighted={`3`}
          Widthed={`3`}
        >
          {children}
        </Box>
        <Box
          Color={`mid`}
          Rounded={`2`}
          Padded={`2`}
          Heighted={`3`}
          Widthed={`3`}
          Outlined={`white1`}
        >
          <Text>2</Text>
        </Box>
        <Box
          Color={`mid`}
          Rounded={`2`}
          Padded={`2`}
          Heighted={`3`}
          Widthed={`3`}
        >
          <Text>2</Text>
        </Box>
        <Box
          Color={`mid`}
          Rounded={`2`}
          Padded={`2`}
          Heighted={`3`}
          Widthed={`3`}
          Outlined={`white1`}
        >
          <Text>3</Text>
        </Box>
        <Box
          Color={`light`}
          Rounded={`1`}
          Padded={`1`}
          Heighted={`3`}
          Widthed={`3`}
        >
          <Text>1</Text>
        </Box>
        <Box
          Color={`light`}
          Rounded={`3`}
          Padded={`1`}
          Heighted={`3`}
          Widthed={`3`}
        >
          <Text>1</Text>
        </Box>
        <Box Positioned={`column`}>
          <Box Positioned={`row`}>
            <Box
              Color={`mid`}
              Rounded={`2`}
              Padded={`2`}
              Heighted={`1`}
              Widthed={`1`}
              Outlined={`white1`}
              Clickable={`yes3`}
            >
              <Text>3</Text>
            </Box>
            <Box
              Color={`heavy`}
              Rounded={`2`}
              Padded={`3`}
              Heighted={`1`}
              Widthed={`1`}
            >
              <Text>5</Text>
            </Box>
            <Box
              Color={`light`}
              Rounded={`1`}
              Padded={`1`}
              Heighted={`1`}
              Widthed={`1`}
            >
              <Text>4</Text>
            </Box>
          </Box>
          <Box Positioned={`row`}>
            <Box
              Color={`mid`}
              Rounded={`2`}
              Padded={`2`}
              Heighted={`1`}
              Widthed={`1`}
              Outlined={`white1`}
            >
              <Text>3</Text>
            </Box>
            <Box
              Color={`heavy`}
              Rounded={`2`}
              Padded={`3`}
              Heighted={`1`}
              Widthed={`1`}
              Clickable={`yes2`}
            >
              <Text>cntr</Text>
            </Box>
            <Box
              Color={`light`}
              Rounded={`1`}
              Padded={`1`}
              Heighted={`1`}
              Widthed={`1`}
            >
              <Text>4</Text>
            </Box>
          </Box>
          <Box
          // Positioned={`row`}
          >
            <CustomButton />
            <ThemeButton />
          </Box>
        </Box>
        <Box
          Color={`mid`}
          Rounded={`2`}
          Padded={`2`}
          Heighted={`3`}
          Widthed={`3`}
        >
          <Text>2</Text>
        </Box>
      </Box>
      {/* 

            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'heavy'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'heavy'}
                Rounded={'1'}
                Padded={'3'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>




            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'3'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
                Outlined={'white1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
                Outlined={'white1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'3'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
                Outlined={'white1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
                Outlined={'white1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'heavy'}
                Rounded={'2'}
                Padded={'3'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>5</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>4</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'heavy'}
                Rounded={'1'}
                Padded={'3'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'heavy'}
                Rounded={'1'}
                Padded={'3'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'heavy'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'2'}
                Padded={'2'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'heavy'}
                Rounded={'1'}
                Padded={'3'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>1</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>2</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'mid'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box>
            <Box
                Color={'light'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box><Box
                Color={'mid'}
                Rounded={'1'}
                Padded={'1'}
                Heighted={'1'}
                Widthed={'1'}
            >
                <Text>3</Text>
            </Box> */}
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

// <Box
//                 Color={'light'}
//                 Rounded={'1'}
//                 Padded={'1'}
//                 Heighted={'3'}
//                 Widthed={'3'}
//             >
//                 <Text>0</Text>
//             </Box>
//             <Box
//                 Color={'light'}
//                 Rounded={'3'}
//                 Padded={'1'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>1</Text>
//             </Box>
//             {/* </Box> */}
//             <Box
//                 Color={'mid'}
//                 Rounded={'2'}
//                 Padded={'2'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//                 Outlined={'white1'}
//             >
//                 <Text>2</Text>
//             </Box>
//             <Box
//                 Color={'mid'}
//                 Rounded={'2'}
//                 Padded={'2'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>2</Text>
//             </Box>
//             <Box
//                 Color={'mid'}
//                 Rounded={'2'}
//                 Padded={'2'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//                 Outlined={'white1'}
//             >
//                 <Text>3</Text>
//             </Box>
//             <Box
//                 Color={'mid'}
//                 Rounded={'2'}
//                 Padded={'2'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>3</Text>
//             </Box>
//             {/* <Box Positioned={'columm'}> */}
//             <Box
//                 Color={'mid'}
//                 Rounded={'2'}
//                 Padded={'2'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>about</Text>
//             </Box>
//             <Box
//                 Color={'mid'}
//                 Rounded={'2'}
//                 Padded={'2'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>guest book</Text>
//             </Box>
//             <Box
//                 Color={'heavy'}
//                 Rounded={'1'}
//                 Padded={'3'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>balance</Text>
//             </Box>
//             {/* </Box> */}
//             <Box
//                 Color={'heavy'}
//                 Rounded={'3'}
//                 Padded={'3'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>5</Text>
//             </Box>
//             <Box
//                 Color={'heavy'}
//                 Rounded={'3'}
//                 Padded={'3'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>6</Text>
//             </Box>
//             {/* <Box Positioned={'columm'}> */}
//             <Box
//                 Color={'light'}
//                 Rounded={'1'}
//                 Padded={'1'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>4</Text>
//             </Box>
//             <Box
//                 Color={'light'}
//                 Rounded={'1'}
//                 Padded={'1'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>0</Text>
//             </Box>
//             {/* </Box> */}
//             {/* <Box Positioned={'columm'}> */}
//             {/* <Box> */}
//             <Box
//                 Color={'light'}
//                 Rounded={'1'}
//                 Padded={'1'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>0</Text>
//             </Box>
//             {/* <Box Positioned={'columm'}> */}
//             <Box
//                 Color={'heavy'}
//                 Rounded={'1'}
//                 Padded={'1'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>1</Text>
//             </Box>
//             <Box
//                 Color={'light'}
//                 Rounded={'1'}
//                 Padded={'1'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>1</Text>
//             </Box>
//             {/* </Box> */}
//             {/* </Box> */}
//             <Box
//                 Color={'mid'}
//                 Rounded={'1'}
//                 Padded={'1'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>0</Text>
//             </Box>
//             {/* </Box> */}
//             {/* <Box Positioned={'columm'}> */}
//             <Box
//                 Color={'light'}
//                 Rounded={'1'}
//                 Padded={'1'}
//                 Heighted={'1'}
//                 Widthed={'1'}
//             >
//                 <Text>0</Text>
//             </Box>
