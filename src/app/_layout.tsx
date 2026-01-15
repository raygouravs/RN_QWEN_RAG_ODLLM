import { AppDarkTheme } from '@/constants/Colors';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? AppDarkTheme : AppDarkTheme}>
      <Stack>
        <Stack.Screen name='(drawer)' options={{
          headerShown: false
        }}/>
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
