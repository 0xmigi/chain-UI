import { css, styled } from '@/styles/stitches.config';
import { mauve } from '@radix-ui/colors';
import { Box } from '@/components/primitives/box';

export const ButtonBase = styled(`button`, {
  variants: {
    boxStyle: {
      yes: {
        ...Box,
      },
      no: {
        cursor: `pointer`,
        border: `none`,
        padding: 0,
        margin: 0,
        textDecoration: `none`,
        alignItems: `center`,
        appearance: `none`,
        boxSizing: `border-box`,
        display: `inline-flex`,
        userSelect: `none`,
        WebkitTapHighlightColor: `rgba(0,0,0,0)`,
        borderRadius: `$sm`,
        backgroundColor: `$elementBg`,
      },
    },
  },
});

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const IconButton = ({
  children,
  onClick,
  ...props
}: IconButtonProps) => {
  return (
    <ButtonBase boxStyle={`no`} onClick={onClick} css={{ ...css }} {...props}>
      {children}
    </ButtonBase>
  );
};
