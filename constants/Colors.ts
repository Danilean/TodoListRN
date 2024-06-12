/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#A7C7E7";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#4A4A4A", // Soft dark gray for text
    background: "#F5F5F5", // Very light gray for background
    tint: tintColorLight,
    icon: "#A3A3A3", // Soft gray for icons
    tabIconDefault: "#A3A3A3",
    tabIconSelected: tintColorLight,
    border: "#E0E0E0", // Light gray for borders
    card: "#FFFFFF", // White for cards
    primary: "#A7C7E7", // Soft pastel blue for primary color
    secondary: "#F7A1C4", // Soft pastel pink for secondary color
  },
  dark: {
    text: "#D1D1D1", // Light gray for text
    background: "#2C2C2C", // Dark gray for background
    tint: tintColorDark,
    icon: "#B0B0B0", // Light gray for icons
    tabIconDefault: "#B0B0B0",
    tabIconSelected: tintColorDark,
    border: "#3E3E3E", // Dark gray for borders
    card: "#383838", // Darker gray for cards
    primary: "#A7C7E7", // Soft pastel blue for primary color
    secondary: "#F7A1C4", // Soft pastel pink for secondary color
  },
};
