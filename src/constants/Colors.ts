import { DefaultTheme } from "@react-navigation/native";

export const AppDarkTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00F2FF',
    background: '#000D14',
    card: '#000508',
    text: '#FFFFFF',
    border: '#B5F7F7',
    notification: '#7202F7',
  }
};