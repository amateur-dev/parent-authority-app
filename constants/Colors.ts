/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

type ColorScheme = 'light' | 'dark';

type ThemeColors = {
  primary: string;
  text: string;
  border: string;
  background: string;
};

export const Colors: Record<ColorScheme, ThemeColors> = {
  light: {
    primary: '#007AFF',
    text: '#000000',
    border: '#E5E5EA',
    background: '#FFFFFF',
  },
  dark: {
    primary: '#0A84FF',
    text: '#FFFFFF',
    border: '#38383A',
    background: '#000000',
  },
};
