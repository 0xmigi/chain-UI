import { SunIcon } from '@radix-ui/react-icons';
import { IconButton } from '../iconButton';
import { xStyle } from '@/styles/xStyle';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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
      <SunIcon
        className={xStyle({
          css: { width: `$3`, height: `$3` },
        })}
      />
    </IconButton>
  );
};
