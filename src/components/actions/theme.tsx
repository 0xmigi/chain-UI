import { SunIcon } from '@radix-ui/react-icons';
import { IconButton } from '../iconButton';
import { xStyle } from '@/styles/xStyle';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Box } from '../primitives/box';

export const ThemeButton = ({ ...props }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    theme === `dark` ? setTheme(`light`) : setTheme(`dark`);
  };

  const mode = theme === `dark` ? `light` : `dark`;

  return (
    <IconButton aria-label={`Activate ${mode} mode`} onClick={toggleTheme}>
      <Box
        Color={`heavy`}
        Rounded={`2`}
        Padded={`3`}
        Heighted={`1`}
        Widthed={`1`}
      >
        <SunIcon
          className={xStyle({
            css: { width: `$3`, height: `$3` },
          })}
        />
      </Box>
    </IconButton>
  );
};
