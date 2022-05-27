import { styled } from '@/styles/stitches.config';

// all the different types of boxs used in the application
export const Box = styled(`div`, {
  display: `flex`,
  flexWrap: `wrap`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  alignContent: `center`,
  padding: `0`,
  margin: `0`,
  variants: {
    Color: {
      light: {
        color: `hsl(27.16, 41.13%, 45.29%)`,
        background: `hsl(27.37, 41.01%, 72.75%)`,
      },
      mid: {
        color: `hsl(22.11, 36.31%, 30.78%)`,
        background: `hsl(21.56, 36.36%, 65.49%)`,
      },
      heavy: {
        color: `hsl(16.8, 24.75%, 19.8%)`,
        background: `hsl(17.65, 24.88%, 59.8%)`,
      },
    },
    Padded: {
      0: {
        // padding: `5px`,
        margin: `5px`,
      },
      1: {
        // padding: `10px`,
        margin: `5px`,
      },
      2: {
        // padding: `15px`,
        margin: `5px`,
      },
    },
    Rounded: {
      0: {
        borderRadius: `5px`,
      },
      1: {
        borderRadius: `10px`,
      },
      2: {
        borderRadius: `15px`,
      },
    },
    Outlined: {
      white1: {
        // boxShadow: `0 0 0 1px white`,
        '&:hover': {
          outlineOffset: `2px`,
          outline: `1px solid hsl(0, 0%, 100%)`,
          // boxShadow: `0 0 0 3px white`,
        },
      },
    },
    Heighted: {
      0: {
        // flexGrow: `1`,
        // flexBasis: `0`,
        height: `56.67px`,
      },
      1: {
        // flexGrow: `2`,
        // flexBasis: `0`,
        height: `123.34px`,
      },
      2: {
        // flexGrow: `3`,
        // flexBasis: `0`,
        height: `190px`,
      },
    },
    Widthed: {
      0: {
        // flexGrow: `1`,
        // flexBasis: `0`,
        width: `56.67px`,
      },
      1: {
        // flexGrow: `2`,
        // flexBasis: `0`,
        width: `123.34px`,
      },
      2: {
        // flexGrow: `3`,
        // flexBasis: `0`,
        width: `190px`,
      },
    },
    Positioned: {
      column: {
        justifyContent: `center`,
        alignItems: `center`,
        alignContent: `center`,
        flexDirection: `column`,
      },
      row: {
        justifyContent: `center`,
        alignItems: `center`,
        alignContent: `center`,
        flexDirection: `row`,
      },
      center: {
        justifyContent: `center`,
        alignItems: `center`,
        alignContent: `center`,
      },
    },
    Aligned: {
      start: {
        alignItems: `flex-start`,
      },
      end: {
        alignItems: `flex-end`,
      },
    },
    Clickable: {
      no: {},
      yes1: {
        '&:active': {
          width: `56.67px`,
          height: `56.67px`,
        },
      },
      yes2: {
        '&:active': {
          width: `123.34px`,
          height: `123.34px`,
        },
      },
      yes3: {
        '&:active': {
          width: `190px`,
          height: `190px`,
        },
      },
    },
    Disabled: {
      true: {
        // color: `#000000`,
        // background: `#E6E6E6`,
      },
    },
  },
});
