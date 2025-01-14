import { styled } from '@/styles/stitches.config';

export const Button = styled(`button`, {
  background: `var(--rk-colors-connectButtonInnerBackground) var(--rk-colors-connectButtonBackground)`,
  width: `fit-content`,
  padding: `10px`,
  border: `2px solid var(--rk-colors-connectButtonBackground)`,
  boxShadow: `var(--rk-shadows-connectButton)`,
  fontFamily: `var(--rk-fonts-body)`,
  fontSize: `16px`,
  fontWeight: `700`,
  color: `$pink`,
});
