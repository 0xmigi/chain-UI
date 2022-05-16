// stitches.config.ts
import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: `rgba(22, 22, 21, 1)`,
      blackFade: `rgba(19, 19, 21, .2)`,
      white: `rgba(253, 252, 252, 1)`,
      whiteFade: `rgba(253, 252, 252, .2)`,
      gray: `rgba(128, 128, 128, 1)`,
      blue: `rgba(3, 136, 252, 1)`,
      red: `rgba(249, 16, 74, 1)`,
      yellow: `rgba(255, 221, 0, 1)`,
      pink: `rgba(232, 141, 163, 1)`,
      turq: `rgba(0, 245, 196, 1)`,
      orange: `rgba(255, 135, 31, 1)`,

      // Alias
      primary: `$black`,
      secondary: `$gray`,
      tertiary: `$turq`,
      link: `$blue`,
      background: `$white`,
      border: `$black`,
      faded: `$whiteFade`,
    },
    space: {
      1: `4px`,
      2: `8px`,
      3: `16px`,
      4: `32px`,
      5: `64px`,
      6: `128px`,
    },
    padding: {
      1: `5px`,
      2: `10px`,
      3: `20px`,
    },
    sizes: {
      1: `4px`,
      2: `8px`,
      3: `16px`,
      4: `32px`,
      5: `64px`,
      6: `128px`,
    },
    radii: {
      1: `2px`,
      2: `4px`,
      3: `8px`,
      round: `9999px`,
    },
  },
  media: {
    dark: `(prefers-color-scheme: dark)`,
    bp1: `(min-width: 32rem)`,
    bp2: `(min-width: 48rem)`,
    bp3: `(min-width: 64rem)`,
    bp4: `(min-width: 96rem)`,
    iphone: `(min-width: 395px)`,
    ipad: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
  },
});

export const darkTheme = createTheme({
  colors: {
    // Alias
    primary: `$white`,
    secondary: `$gray`,
    tertiary: `$turq`,
    link: `$blue`,
    background: `$black`,
    border: `$black`,
    faded: `$blackFade`,
  },
});

export const reset = {
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: `0`,
      padding: `0`,
      border: `0`,
      fontSize: `100%`,
      font: `inherit`,
      verticalAlign: `baseline`,
    },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section':
    {
      display: `block`,
    },
  '*[hidden]': {
    display: `none`,
  },
  body: {
    lineHeight: `1`,
  },
  'ol, ul': {
    listStyle: `none`,
  },
  'blockquote, q': {
    quotes: `none`,
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: ``,
  },
  table: {
    borderSpacing: `0`,
  },
};

export const globalStyles = globalCss({
  ...reset,
  // dark mode
  '@dark': {
    // notice the `media` definition on the stitches.config.ts file
    ':root:not(.light)': {
      ...Object.keys(darkTheme.colors).reduce((varSet) => {
        return {
          ...varSet,
        };
      }, {}),
    },
  },

  // general
  '*': {
    wordBreak: `break-word`,
    whiteSpace: `normal`,
  },
  ':root': {
    fontFamily: `system-ui, serif`,
    fontWeight: `400`,
    fontSize: `16px`,
    lineHeight: `1.618`,
  },
  body: {
    background: `$background`,
    color: `$primary`,
    minHeight: `100%`,
    padding: `0`,
    margin: `0`,
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: `system-ui, serif`,
    fontWeight: `700`,
  },
  'pre, code': {
    fontFamily: `monospace`,
    border: `1px solid`,
    borderColor: `inherit`,
    borderRadius: `6px`,
    fontSize: `90%`,
  },
  pre: { padding: `0.35rem 0.65rem` },
  code: { margin: `0`, padding: `0 0.25rem` },
  'pre code': {
    padding: `0.25rem 0.45rem`,
    border: `none`,
  },
  p: {
    fontSize: `1rem`,
  },
  h1: {
    fontSize: `5.653rem`,
    marginBottom: `$4`,
  },
  h2: {
    fontSize: `3.998rem`,
    marginBottom: `$3`,
  },
  h3: {
    fontSize: `2.827rem`,
    marginBottom: `$2`,
  },
  h4: {
    fontSize: `1.999rem`,
    marginBottom: `$1`,
  },
  h5: {
    fontSize: `1.414rem`,
    marginBottom: `$0`,
  },
  h6: {
    fontSize: `1rem`,
  },
  small: {
    fontSize: `0.707rem`,
  },
  a: {
    color: `inherit`,
    fontFamily: `system-ui, serif`,
    fontWeight: `700`,
    textDecoration: `none`,
  },
  'ul, ol': {
    marginLeft: `$4`,
    fontFamily: `'monospace`,
  },
  ul: {
    listStyle: `circle`,
  },
  ol: {
    listStyle: `decimal`,
  },
  'b, strong': {
    fontWeight: `900`,
  },
  'i, em': {
    fontStyle: `italic`,
  },
  hr: {
    border: `2px solid $primary`,
    width: `100%`,
  },
  'blockquote, q': {
    borderLeft: `2px solid $primary`,
    marginBottom: `$3`,
    paddingLeft: `$3`,
  },
});

// import { createStitches, PropertyValue, ScaleValue } from '@stitches/react';
// import type * as Stitches from '@stitches/react';
// import { mauve, mauveDark, violet, violetDark } from '@radix-ui/colors';

// const spaceTokens = {
//   0: '0px',
//   px: '1px',
//   // 0.5: "0.125rem",
//   1: '0.25rem',
//   // 1.5: "0.375rem",
//   2: '0.5rem',
//   // 2.5: "0.625rem",
//   3: '0.75rem',
//   // 3.5: "0.875rem",
//   4: '1rem',
//   5: '1.25rem',
//   6: '1.5rem',
//   7: '1.75rem',
//   8: '2rem',
//   9: '2.25rem',
//   10: '2.5rem',
//   12: '3rem',
//   14: '3.5rem',
//   16: '4rem',
//   20: '5rem',
//   24: '6rem',
//   28: '7rem',
//   32: '8rem',
//   36: '9rem',
//   40: '10rem',
//   44: '11rem',
//   48: '12rem',
//   52: '13rem',
//   56: '14rem',
//   60: '15rem',
//   64: '16rem',
//   72: '18rem',
//   80: '20rem',
//   96: '24rem',
// };

// const darkModeConfig = {
//   colors: {
//     ...mauveDark,
//     ...violetDark,

//     AppBg: mauveDark.mauve1,
//     loContrast: mauveDark.mauve11,
//     hiContrast: mauveDark.mauve12,
//     muted: mauveDark.mauve9,
//     elementBg: mauveDark.mauve3,
//     elementBorder: mauveDark.mauve7,
//     link: violetDark.violet10,
//   },
// };

// export const {
//   styled,
//   theme,
//   createTheme,
//   config,
//   css,
//   getCssText,
//   keyframes,
// } = createStitches({
//   theme: {
//     colors: {
//       ...mauve,
//       ...violet,

//       AppBg: mauve.mauve1,
//       loContrast: mauve.mauve11,
//       hiContrast: mauve.mauve12,
//       muted: mauve.mauve9,
//       elementBg: mauve.mauve3,
//       elementBorder: mauve.mauve7,
//       link: violet.violet10,
//     },
//     space: {
//       ...spaceTokens,
//     },
//     sizes: {
//       ...spaceTokens,
//       max: 'max-content',
//       min: 'min-content',
//       full: '100%',
//       xs: '20rem',
//       sm: '24rem',
//       md: '28rem',
//       lg: '32rem',
//       xl: '36rem',
//       '2xl': '42rem',
//       '3xl': '48rem',
//       '4xl': '50rem',
//       '5xl': '56rem',
//     },
//     fontSizes: {
//       xs: '0.75rem',
//       sm: '0.875rem',
//       md: '1rem',
//       lg: '1.125rem',
//       xl: '1.25rem',
//       '2xl': '1.5rem',
//       '3xl': '1.875rem',
//       '4xl': '2.25rem',
//       '5xl': '3rem',
//       '6xl': '3.75rem',
//       '7xl': '4.5rem',
//       '8xl': '6rem',
//       '9xl': '8rem',
//     },
//     fonts: {
//       heading: 'Inter, sans-serif',
//       body: 'Manrope, sans-serif',
//     },
//     fontWeights: {
//       regular: 400,
//       bold: 700,
//     },
//     lineHeights: {
//       xs: '1rem',
//       sm: '1.25rem',
//       md: '1.5rem',
//       lg: '1.75rem',
//       xl: '1.75rem',
//       '2xl': '2rem',
//       '3xl': '2.25rem',
//       '4xl': '2.5rem',
//       '5xl': '3rem',
//       '6xl': '3.75rem',
//       '7xl': '4.5rem',
//       '8xl': '6rem',
//       '9xl': '8rem',
//     },
//     letterSpacings: {},
//     borderWidths: {},
//     borderStyles: {
//       subtle:
//         'inset 0 0 0 1px var(--colors-elementBorder), 0 0 0 1px var(--colors-elementBorder)',
//     },
//     radii: {
//       xs: '2px',
//       sm: '4px',
//       md: '8px',
//       lg: '24px',
//       full: '9999px',
//     },
//     shadows: {},
//     transitions: {},
//     zIndices: {
//       hide: -1,
//       auto: 'auto',
//       base: 0,
//       docked: 10,
//       dropdown: 1000,
//       sticky: 1100,
//       banner: 1200,
//       overlay: 1300,
//       modal: 1400,
//       popover: 1500,
//       skipLink: 1600,
//       toast: 1700,
//       tooltip: 1800,
//     },
//   },
//   media: {
//     dark: '(prefers-color-scheme: dark)',
//     bp1: '(min-width: 280px)',
//     bp2: '(min-width: 768px)',
//     bp3: '(min-width: 992px)',
//     bp4: '(min-width: 1280px)',
//     bp5: '(min-width: 1440px)',
//   },
//   utils: {
//     p: (value: ScaleValue<'space'>) => ({
//       paddingTop: value,
//       paddingBottom: value,
//       paddingLeft: value,
//       paddingRight: value,
//     }),
//     pt: (value: ScaleValue<'space'>) => ({
//       paddingTop: value,
//     }),
//     pr: (value: ScaleValue<'space'>) => ({
//       paddingRight: value,
//     }),
//     pb: (value: ScaleValue<'space'>) => ({
//       paddingBottom: value,
//     }),
//     pl: (value: ScaleValue<'space'>) => ({
//       paddingLeft: value,
//     }),
//     px: (value: ScaleValue<'space'>) => ({
//       paddingLeft: value,
//       paddingRight: value,
//     }),
//     py: (value: ScaleValue<'space'>) => ({
//       paddingTop: value,
//       paddingBottom: value,
//     }),
//     m: (value: ScaleValue<'space'>) => ({
//       marginTop: value,
//       marginBottom: value,
//       marginLeft: value,
//       marginRight: value,
//     }),
//     mt: (value: ScaleValue<'space'>) => ({
//       marginTop: value,
//     }),
//     mr: (value: ScaleValue<'space'>) => ({
//       marginRight: value,
//     }),
//     mb: (value: ScaleValue<'space'>) => ({
//       marginBottom: value,
//     }),
//     ml: (value: ScaleValue<'space'>) => ({
//       marginLeft: value,
//     }),
//     mx: (value: ScaleValue<'space'>) => ({
//       marginLeft: value,
//       marginRight: value,
//     }),
//     my: (value: ScaleValue<'space'>) => ({
//       marginTop: value,
//       marginBottom: value,
//     }),
//     w: (value: ScaleValue<'sizes'>) => ({
//       width: value,
//     }),
//     h: (value: ScaleValue<'sizes'>) => ({
//       height: value,
//     }),
//     boxSize: (value: ScaleValue<'sizes'>) => ({
//       width: value,
//       height: value,
//     }),
//     bg: (value: PropertyValue<'backgroundColor'>) => ({
//       backgroundColor: value,
//     }),
//   },
// });

// export const darkTheme = createTheme('darkTheme', darkModeConfig);
// export type CSS = Stitches.CSS<typeof config>;
